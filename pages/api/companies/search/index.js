import searchCompanies from '@/helpers/claudeSearch';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res
      .status(405)
      .json({ message: `Method ${req.method} not allowed` });
  }

  const term = decodeURIComponent(req.query.term || '');

  try {
    const result = await searchCompanies(term, req.query);
    return res.json(result);
  } catch (error) {
    console.error('Search error:', error);
    return res
      .status(500)
      .json({ status: 'fail', message: 'Failed to fetch company data' });
  }
}
