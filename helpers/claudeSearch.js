import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const cache = new Map();
const estimateCache = new Map();
const CACHE_TTL = 60 * 60 * 1000; // 1 hour

const PER_PAGE = 15;
const MAX_RESULTS = 45;

function parseRevenue(range) {
  if (!range || range === '') return null;
  const parts = range.split(',|').filter(Boolean);
  if (!parts.length) return null;
  return parts.map((r) => {
    if (r === '50+ billion') return [50e9, 9000e9];
    let mul = 1000;
    const unit = r.split(' ')[1];
    if (unit === 'million') mul = 1e6;
    else if (unit === 'billion') mul = 1e9;
    const [min, max] = r
      .split(' ')[0]
      .split('-')
      .map((n) => +n.replace(/,/g, '') * mul);
    return [min, max];
  });
}

function parseSize(range) {
  if (!range || range === '') return null;
  const parts = range.split(',|').filter(Boolean);
  if (!parts.length) return null;
  return parts.map((r) => {
    if (r === '10,001+') return [10001, 2147483647];
    const [min, max] = r.split('-').map((n) => +n.replace(/,/g, ''));
    return [min, max];
  });
}

function applyFilters(companies, query) {
  let out = [...companies];

  const types = (query.companyType || '').split(',').filter(Boolean);
  if (types.length) out = out.filter((c) => types.includes(c.companyType));

  const sizeRanges = parseSize(query.companySize || '');
  if (sizeRanges) {
    out = out.filter(
      (c) =>
        c.employeesCount &&
        sizeRanges.some(
          ([mn, mx]) => c.employeesCount >= mn && c.employeesCount <= mx
        )
    );
  }

  const revRanges = parseRevenue(query.revenue || '');
  if (revRanges) {
    out = out.filter(
      (c) =>
        c.revenue &&
        revRanges.some(([mn, mx]) => c.revenue >= mn && c.revenue <= mx)
    );
  }

  const expertise = (query.expertise || '').split(',').filter(Boolean);
  if (expertise.length) {
    out = out.filter((c) =>
      expertise.some((e) =>
        (c.expertise || '').toLowerCase().includes(e.toLowerCase())
      )
    );
  }

  const csrTags = (query.csr || '').split(',').filter(Boolean);
  if (csrTags.length) {
    out = out.filter((c) =>
      csrTags.some((t) => (c.csr || '').toLowerCase().includes(t.toLowerCase()))
    );
  }

  // "Only companies that run CSR initiatives" checkbox.
  if (query.hasCSR === 'true') {
    out = out.filter((c) => c.csr && String(c.csr).trim() !== '');
  }

  const hq = query.companyHQ || '';
  if (hq)
    out = out.filter((c) =>
      (c.HQLocation || '').toLowerCase().includes(hq.toLowerCase())
    );

  const year = query.foundationYear || '';
  if (year)
    out = out.filter((c) => String(c.yearOfFoundation) === String(year));

  const parent = query.parentOrganisation || '';
  if (parent)
    out = out.filter((c) =>
      (c.parentCompany || '').toLowerCase().includes(parent.toLowerCase())
    );

  const diversity = (query.diversity || '').split(',').filter(Boolean);
  if (diversity.includes('Female CEO')) out = out.filter((c) => c.hasFemaleCEO);
  if (diversity.includes('Underrepresented minorities'))
    out = out.filter((c) => c.hasUnderrepresentedMinorities);

  return out;
}

const SCHEMA = `{
  "name": "official company name",
  "industry": "industry/sector",
  "expertise": "comma-separated 4-6 areas e.g. 'Fashion, Accessories, Beauty, Fragrance'",
  "csr": "comma-separated CSR initiatives e.g. 'sustainability,diversity' or null",
  "websiteUrl": "domain only e.g. 'chanel.com'",
  "HQLocation": "City, Country",
  "parentCompany": "parent company name or null",
  "founder": "founder name(s) or null",
  "yearOfFoundation": 1910,
  "revenue": 17600000000,
  "employeesCount": 28000,
  "areaServed": "Worldwide",
  "subsidiaries": "comma-separated subsidiary names or null",
  "keyPeople": "up to 3 as Name (Title), Name (Title), Name (Title) or null",
  "about": "ONE concise sentence, max 140 characters",
  "companyType": "Public or Private or Subsidiary",
  "hasFemaleCEO": false,
  "hasUnderrepresentedMinorities": false
}`;

const CHUNK_SIZE = 6; // companies requested per parallel call

// Turn the literal string "null" / "n/a" / empty into a real null value.
function cleanValue(v) {
  if (v === null || v === undefined) return null;
  if (typeof v !== 'string') return v;
  const t = v.trim();
  if (!t || t.toLowerCase() === 'null' || t.toLowerCase() === 'n/a') return null;
  return t;
}

// Clean a comma-separated list (e.g. keyPeople), dropping any "null" entries.
function cleanList(v) {
  const cleaned = cleanValue(v);
  if (!cleaned) return null;
  const parts = cleaned
    .split(',')
    .map((p) => p.trim())
    .filter((p) => p && p.toLowerCase() !== 'null');
  return parts.length ? parts.join(', ') : null;
}

// Unique expertise tags across a set of companies (case-insensitive, first
// casing wins). Computed from the unfiltered set so the Expertise filter
// options don't shrink when the user selects one.
function uniqueTags(companies, field) {
  const seen = new Set();
  const tags = [];
  companies.forEach((c) => {
    (c[field] || '').split(',').forEach((t) => {
      const tag = t.trim();
      if (!tag) return;
      const key = tag.toLowerCase();
      if (seen.has(key)) return;
      seen.add(key);
      tags.push(tag);
    });
  });
  return tags;
}

function buildPrompt(instruction, exclude) {
  const excludeRule = exclude.length
    ? `\n\nDo NOT include any of these companies, which are already listed: ${exclude.join(
        ', '
      )}.`
    : '';
  return `You are a business intelligence database. Return a JSON array of real companies.
${instruction}${excludeRule}

For each company, return an object with EXACTLY these fields (use null for unknown values):
${SCHEMA}

Return ONLY a valid JSON array — no markdown, no code blocks, no explanation.`;
}

async function callClaude(prompt) {
  const message = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 4096,
    messages: [{ role: 'user', content: prompt }],
  });
  const raw = message.content[0].text
    .trim()
    .replace(/^```json?\n?/, '')
    .replace(/\n?```$/, '');
  return JSON.parse(raw);
}

// Generate a page of companies via several parallel calls so the wall-clock
// time stays close to a single small request even though we return ~15
// detailed profiles. Results are de-duplicated by name, preserving order.
async function generateCompanies(term, exclude, constraints = []) {
  const firstPage = exclude.length === 0;
  const constraintRule = constraints.length
    ? ` Only include companies ${constraints.join(', and ')}.`
    : '';

  const instructions = firstPage
    ? [
        `The FIRST item must be "${term}" itself, followed by its ${
          CHUNK_SIZE - 1
        } closest competitors, ordered by similarity.`,
        `Return ${CHUNK_SIZE} competitors or peers of "${term}" in the same industry, ranked roughly 6th–11th by similarity. Do NOT include "${term}" itself.`,
        `Return ${CHUNK_SIZE} further competitors or peers of "${term}", ranked roughly 12th–17th by similarity. Do NOT include "${term}" itself.`,
      ]
    : [
        `Return ${CHUNK_SIZE} more competitors or peers of "${term}" not yet listed.`,
        `Return ${CHUNK_SIZE} more companies in the same industry as "${term}" not yet listed.`,
        `Return ${CHUNK_SIZE} more companies similar to "${term}" not yet listed.`,
      ];

  const prompts = instructions.map((ins) =>
    buildPrompt(ins + constraintRule, exclude)
  );

  const settled = await Promise.allSettled(prompts.map(callClaude));

  const seenNames = new Set();
  const seenDomains = new Set();
  const out = [];
  settled.forEach((r) => {
    if (r.status !== 'fulfilled' || !Array.isArray(r.value)) return;
    r.value.forEach((c) => {
      if (!c || !c.name) return;
      const nameKey = c.name.trim().toLowerCase();
      // Normalise the website so "The Financial Times" and "Financial Times"
      // (both ft.com) collapse to a single entry.
      const domain = (c.websiteUrl || '')
        .toLowerCase()
        .replace(/^https?:\/\//, '')
        .replace(/^www\./, '')
        .replace(/\/.*$/, '')
        .trim();
      if (seenNames.has(nameKey)) return;
      if (domain && seenDomains.has(domain)) return;
      seenNames.add(nameKey);
      if (domain) seenDomains.add(domain);
      out.push(c);
    });
  });

  if (!out.length) throw new Error('No companies generated');
  return out.slice(0, PER_PAGE);
}

// Cheap, rough estimate of how many similar companies exist worldwide, so the
// UI can show a "universe" total (e.g. "~300 similar companies") without us
// actually generating them all. Runs in parallel with the page generation, so
// it adds no real latency.
// Turn the active filters into natural-language constraints for the estimate
// prompt, so the "universe" number reflects everything the user has selected.
function describeFilters(query, locations) {
  const parts = [];
  if (locations.length) {
    parts.push(`located in or around ${locations.join('; ')}`);
  }
  const custom = (query.custom || '').trim();
  if (custom) parts.push(`matching this requirement: "${custom}"`);
  const types = (query.companyType || '').split(',').filter(Boolean);
  if (types.length) parts.push(`that are ${types.join(' or ')} companies`);

  const expertise = (query.expertise || '').split(',').filter(Boolean);
  if (expertise.length) parts.push(`with expertise in ${expertise.join(', ')}`);

  const csr = (query.csr || '').split(',').filter(Boolean);
  if (csr.length) parts.push(`with a CSR focus on ${csr.join(', ')}`);
  if (query.hasCSR === 'true') parts.push('that run CSR initiatives');

  const diversity = (query.diversity || '').split(',').filter(Boolean);
  if (diversity.length) parts.push(`matching: ${diversity.join(', ')}`);

  if (query.companyHQ) parts.push(`headquartered in ${query.companyHQ}`);
  if (query.foundationYear) parts.push(`founded in ${query.foundationYear}`);
  if (query.parentOrganisation) {
    parts.push(`part of ${query.parentOrganisation}`);
  }

  const size = (query.companySize || '').split(',|').filter(Boolean);
  if (size.length) {
    parts.push(`with an employee count in the range(s) ${size.join(', ')}`);
  }
  const revenue = (query.revenue || '').split(',|').filter(Boolean);
  if (revenue.length) {
    parts.push(`with annual revenue in the range(s) ${revenue.join(', ')}`);
  }
  return parts;
}

async function estimateTotal(term, constraints = []) {
  try {
    const where = constraints.length
      ? ` ${constraints.join(', ')}`
      : ' worldwide';
    const prompt = `Estimate how many companies${where} are broadly similar to or competitors of "${term}" (same or adjacent industry, comparable products or market). Reply with ONLY a single integer — your best rough estimate. No words, no commas.`;
    const message = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 16,
      messages: [{ role: 'user', content: prompt }],
    });
    const n = parseInt(
      (message.content[0].text || '').replace(/[^0-9]/g, ''),
      10
    );
    return Number.isFinite(n) && n > 0 ? n : null;
  } catch (e) {
    return null;
  }
}

// Estimate cached by term + the full filter combination, so it recomputes
// whenever any filter changes but is reused for repeated identical combos.
async function getEstimate(term, query, locations) {
  const constraints = describeFilters(query, locations);
  const key = `${term.toLowerCase()}::${constraints.join('|').toLowerCase()}`;
  const cached = estimateCache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.value;
  }
  const value = await estimateTotal(term, constraints);
  estimateCache.set(key, { value, timestamp: Date.now() });
  return value;
}

export default async function searchCompanies(term, query = {}) {
  if (!term) {
    return {
      status: 'success',
      count: 0,
      totalCount: 0,
      page: 0,
      data: { companies: [] },
    };
  }

  const page = parseInt(query.page, 10) || 0;
  const exclude = (query.exclude || '')
    .split('|')
    .map((s) => s.trim())
    .filter(Boolean);

  // Location filter values arrive pipe-separated per location and comma-
  // separated between locations, e.g. "Paris|France,Europe".
  const locations = (query.locations || '')
    .split(',')
    .map((l) => l.replace(/\|/g, ', ').trim())
    .filter(Boolean);
  const types = (query.companyType || '').split(',').filter(Boolean);
  const custom = (query.custom || '').trim().slice(0, 200);

  // Constraints that steer generation itself (so results actually match),
  // and therefore must be part of the generation cache key.
  const genConstraints = [];
  if (locations.length) {
    genConstraints.push(
      `headquartered in or with a major presence in ${locations.join('; ')}`
    );
  }
  if (types.length) {
    genConstraints.push(`that are ${types.join(' or ')} companies`);
  }
  if (custom) {
    genConstraints.push(`matching this specific requirement: "${custom}"`);
  }

  const cacheKey = `${term.toLowerCase()}::p${page}::${exclude
    .join(',')
    .toLowerCase()}::loc:${locations
    .join(';')
    .toLowerCase()}::type:${types
    .join(';')
    .toLowerCase()}::custom:${custom.toLowerCase()}`;
  let companies;
  let estimatedTotal = null;

  // The estimate depends on ALL active filters, so it runs (and is cached)
  // independently of the generated company list. Kick it off first so it
  // overlaps with generation. Only the first page needs it; later pages keep
  // the page-0 estimate on the client.
  const estimatePromise =
    page === 0 ? getEstimate(term, query, locations) : Promise.resolve(null);

  const cached = cache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    companies = cached.data;
  } else {
    const offset = page * PER_PAGE;
    const parsed = await generateCompanies(term, exclude, genConstraints);
    companies = parsed
      .filter((c) => c && c.name)
      .map((c, i) => ({
        ...c,
        keyPeople: cleanList(c.keyPeople),
        subsidiaries: cleanList(c.subsidiaries),
        founder: cleanValue(c.founder),
        parentCompany: cleanValue(c.parentCompany),
        csr: cleanValue(c.csr),
        about: cleanValue(c.about),
        id: offset + i + 1,
        companyId: offset + i + 1,
        hidden: false,
        stockData: null,
      }));

    cache.set(cacheKey, { data: companies, timestamp: Date.now() });
  }

  estimatedTotal = await estimatePromise;

  const filtered = applyFilters(companies, query);
  // More may be available until we reach the cap (3 pages).
  const hasMore = (page + 1) * PER_PAGE < MAX_RESULTS && companies.length > 0;
  return {
    status: 'success',
    count: filtered.length,
    totalCount: filtered.length,
    estimatedTotal,
    availableExpertise: uniqueTags(companies, 'expertise'),
    availableCSR: uniqueTags(companies, 'csr'),
    hasMore,
    page,
    data: { companies: filtered },
  };
}
