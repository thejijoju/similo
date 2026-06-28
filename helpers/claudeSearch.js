import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const cache = new Map();
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
async function generateCompanies(term, exclude) {
  const firstPage = exclude.length === 0;

  const prompts = firstPage
    ? [
        buildPrompt(
          `The FIRST item must be "${term}" itself, followed by its ${CHUNK_SIZE -
            1} closest competitors, ordered by similarity.`,
          exclude
        ),
        buildPrompt(
          `Return ${CHUNK_SIZE} competitors or peers of "${term}" in the same industry, ranked roughly 6th–11th by similarity. Do NOT include "${term}" itself.`,
          exclude
        ),
        buildPrompt(
          `Return ${CHUNK_SIZE} further competitors or peers of "${term}", ranked roughly 12th–17th by similarity. Do NOT include "${term}" itself.`,
          exclude
        ),
      ]
    : [
        buildPrompt(
          `Return ${CHUNK_SIZE} more competitors or peers of "${term}" not yet listed.`,
          exclude
        ),
        buildPrompt(
          `Return ${CHUNK_SIZE} more companies in the same industry as "${term}" not yet listed.`,
          exclude
        ),
        buildPrompt(
          `Return ${CHUNK_SIZE} more companies similar to "${term}" not yet listed.`,
          exclude
        ),
      ];

  const settled = await Promise.allSettled(prompts.map(callClaude));

  const seen = new Set();
  const out = [];
  settled.forEach((r) => {
    if (r.status !== 'fulfilled' || !Array.isArray(r.value)) return;
    r.value.forEach((c) => {
      if (!c || !c.name) return;
      const key = c.name.trim().toLowerCase();
      if (seen.has(key)) return;
      seen.add(key);
      out.push(c);
    });
  });

  if (!out.length) throw new Error('No companies generated');
  return out.slice(0, PER_PAGE);
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

  const cacheKey = `${term.toLowerCase()}::p${page}::${exclude
    .join(',')
    .toLowerCase()}`;
  let companies;

  const cached = cache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    companies = cached.data;
  } else {
    const parsed = await generateCompanies(term, exclude);
    const offset = page * PER_PAGE;
    companies = parsed
      .filter((c) => c && c.name)
      .map((c, i) => ({
        ...c,
        id: offset + i + 1,
        companyId: offset + i + 1,
        hidden: false,
        stockData: null,
      }));

    cache.set(cacheKey, { data: companies, timestamp: Date.now() });
  }

  const filtered = applyFilters(companies, query);
  // More may be available until we reach the cap (3 pages).
  const hasMore =
    (page + 1) * PER_PAGE < MAX_RESULTS && companies.length > 0;
  return {
    status: 'success',
    count: filtered.length,
    totalCount: filtered.length,
    hasMore,
    page,
    data: { companies: filtered },
  };
}
