const { CSRLink } = require('../../../models/index');

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res
      .status(405)
      .json({ message: `Method ${req.method} not allowed` });
  }
  const csrs = await CSRLink.findAll();

  const csrLinksArray = csrs.map((csrLink) => ({
    company: csrLink.companyId,
    name: csrLink.csrName,
    url: csrLink.url,
  }));

  return res.json({
    status: 'success',
    data: { csrLinks: csrLinksArray },
  });
}
