export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res
      .status(405)
      .json({ message: `Method ${req.method} not allowed` });
  }

  const term = req.query.term || '';
  if (!term) {
    return res.json({
      status: 'success',
      data: { isCompany: false, isIndustry: false },
    });
  }

  // Treat every query as a keyword search so results use the paginated
  // "Display more results" flow (the company-suggestion flow hides it).
  return res.json({
    status: 'success',
    data: { isCompany: false, isIndustry: false, name: term },
  });
}
