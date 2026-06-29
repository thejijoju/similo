// Client-side export of the currently loaded/filtered companies as CSV, JSON,
// or an elegant print-to-PDF report. No server calls — works on the data
// already on the page.

const BASE_COLUMNS = [
  ['name', 'Company'],
  ['websiteUrl', 'Website'],
  ['industry', 'Industry'],
  ['HQLocation', 'HQ'],
  ['yearOfFoundation', 'Founded'],
  ['founder', 'Founder'],
  ['revenue', 'Revenue'],
  ['employeesCount', 'Employees'],
  ['companyType', 'Type'],
  ['expertise', 'Expertise'],
  ['csr', 'CSR'],
  ['parentCompany', 'Parent organization'],
  ['areaServed', 'Area served'],
  ['keyPeople', 'Key people'],
  ['subsidiaries', 'Subsidiaries'],
  ['about', 'About'],
];

function visibleCompanies(companies) {
  return (companies || []).filter((c) => c && !c.hidden);
}

function slug(s) {
  return (s || 'results')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function formatRevenue(n) {
  if (!n && n !== 0) return '';
  if (n >= 1e9) return `€${(n / 1e9).toString().replace('.', ',')} billion`;
  if (n >= 1e6) return `€${(n / 1e6).toString().replace('.', ',')} million`;
  return `€${n.toLocaleString('en-US')}`;
}

function downloadBlob(content, filename, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function csvEscape(val) {
  const s = val === null || val === undefined ? '' : String(val);
  if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

export function exportCSV(companies, customFields, term) {
  const rows = visibleCompanies(companies);
  const headers = [...BASE_COLUMNS.map((c) => c[1]), ...customFields];
  const lines = [headers.map(csvEscape).join(',')];
  rows.forEach((c) => {
    const base = BASE_COLUMNS.map((col) => csvEscape(c[col[0]]));
    const custom = customFields.map((f) =>
      csvEscape((c.custom && c.custom[f]) || '')
    );
    lines.push([...base, ...custom].join(','));
  });
  // BOM so Excel reads UTF-8 correctly.
  downloadBlob(
    `\ufeff${lines.join('\r\n')}`,
    `similo-${slug(term)}.csv`,
    'text/csv;charset=utf-8;'
  );
}

export function exportJSON(companies, customFields, term) {
  const rows = visibleCompanies(companies).map((c) => {
    const obj = {};
    BASE_COLUMNS.forEach((col) => {
      obj[col[0]] = c[col[0]] === undefined ? null : c[col[0]];
    });
    if (customFields.length) obj.custom = c.custom || {};
    return obj;
  });
  const payload = {
    query: term,
    exportedAt: new Date().toISOString(),
    count: rows.length,
    companies: rows,
  };
  downloadBlob(
    JSON.stringify(payload, null, 2),
    `similo-${slug(term)}.json`,
    'application/json'
  );
}

function escapeHtml(s) {
  return String(s === null || s === undefined ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function cell(label, value) {
  if (!value && value !== 0) return '';
  return `<div class="cell"><span class="l">${escapeHtml(
    label
  )}</span><span class="v">${escapeHtml(value)}</span></div>`;
}

function cardHTML(c, customFields) {
  const tags = (c.expertise || '')
    .split(',')
    .map((t) => t.trim())
    .filter(Boolean)
    .map((t) => `<span class="tag">${escapeHtml(t)}</span>`)
    .join('');

  const customCells = customFields
    .map((f) => cell(f, c.custom && c.custom[f]))
    .join('');

  return `
    <div class="card">
      <h2>${escapeHtml(c.name)}</h2>
      ${
        c.websiteUrl
          ? `<a class="web" href="https://${escapeHtml(
              c.websiteUrl
            )}">${escapeHtml(c.websiteUrl)}</a>`
          : ''
      }
      <div class="grid">
        ${cell('Industry', c.industry)}
        ${cell('Headquarters', c.HQLocation)}
        ${cell('Founded', c.yearOfFoundation)}
        ${cell('Revenue', formatRevenue(c.revenue))}
        ${cell(
          'Employees',
          c.employeesCount ? c.employeesCount.toLocaleString('en-US') : ''
        )}
        ${cell('Type', c.companyType)}
        ${cell('Founder', c.founder)}
        ${cell('Parent organization', c.parentCompany)}
        ${cell('Area served', c.areaServed)}
        ${cell('Key people', c.keyPeople)}
      </div>
      ${tags ? `<div class="tags">${tags}</div>` : ''}
      ${c.about ? `<div class="about">${escapeHtml(c.about)}</div>` : ''}
      ${
        customCells
          ? `<div class="custom"><div class="grid">${customCells}</div></div>`
          : ''
      }
    </div>`;
}

export function exportPDF(companies, customFields, term) {
  const rows = visibleCompanies(companies);
  const date = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const cards = rows.map((c) => cardHTML(c, customFields)).join('');

  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>Similo — ${escapeHtml(term)}</title>
<style>
  * { box-sizing: border-box; }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    color: #1f2733;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  .cover { padding: 48px 40px 26px; border-bottom: 3px solid #14a2b8; }
  .brand { font-size: 12px; letter-spacing: 3px; text-transform: uppercase; color: #14a2b8; font-weight: 700; }
  .cover h1 { margin: 10px 0 6px; font-size: 26px; line-height: 1.2; color: #0c1c3d; }
  .cover .meta { font-size: 13px; color: #7a8699; }
  main { padding: 22px 40px; }
  .card {
    border: 1px solid #e7ebf0;
    border-left: 4px solid #14a2b8;
    border-radius: 8px;
    padding: 16px 18px;
    margin-bottom: 14px;
    page-break-inside: avoid;
  }
  .card h2 { margin: 0 0 2px; font-size: 17px; color: #0c1c3d; }
  .web { font-size: 12.5px; color: #14a2b8; text-decoration: none; }
  .grid { display: flex; flex-wrap: wrap; gap: 10px 28px; margin-top: 12px; }
  .cell .l { display: block; font-size: 10px; text-transform: uppercase; letter-spacing: 0.4px; color: #9aa4b2; margin-bottom: 1px; }
  .cell .v { font-size: 12.5px; color: #28303d; }
  .tags { margin-top: 12px; }
  .tag { display: inline-block; font-size: 11px; background: #eef6f8; color: #0f5f6e; border-radius: 12px; padding: 2px 9px; margin: 0 6px 6px 0; }
  .about { margin-top: 12px; font-size: 12.5px; line-height: 1.55; color: #5b6675; }
  .custom { margin-top: 12px; padding-top: 10px; border-top: 1px dashed #dfe5ec; }
  .custom .cell .l { color: #14a2b8; }
  .foot { padding: 16px 40px 30px; font-size: 11px; color: #9aa4b2; border-top: 1px solid #eef0f3; }
  @page { margin: 12mm; }
</style>
</head>
<body>
  <div class="cover">
    <div class="brand">Similo</div>
    <h1>Companies similar to ${escapeHtml(term)}</h1>
    <div class="meta">${rows.length} companies · ${date}</div>
  </div>
  <main>${cards}</main>
  <div class="foot">Generated with Similo · similo.xyz — company data is AI-generated and may be approximate.</div>
</body>
</html>`;

  const w = window.open('', '_blank');
  if (!w) return;
  w.document.open();
  w.document.write(html);
  w.document.close();
  w.focus();
  setTimeout(() => {
    w.print();
  }, 500);
}
