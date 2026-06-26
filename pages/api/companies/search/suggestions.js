export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res
      .status(405)
      .json({ message: `Method ${req.method} not allowed` });
  }

  const term = req.query.term || '';
  if (!term) {
    return res.json({ status: 'success', count: 0, data: { companies: [] } });
  }

  return res.json({
    status: 'success',
    count: 1,
    data: { companies: [{ name: term, type: 'company' }] },
  });
}
