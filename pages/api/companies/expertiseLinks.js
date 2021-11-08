const { ExpertiseLink } = require('../../../models/index');

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res
      .status(405)
      .json({ message: `Method ${req.method} not allowed` });
  }
  const csrs = await ExpertiseLink.findAll();

  const expertiseLinksArray = csrs.map((expertiseLink) => ({
    company: expertiseLink.companyId,
    name: expertiseLink.expertiseName,
    url: expertiseLink.url,
  }));

  return res.json({
    status: 'success',
    data: { expertiseLinks: expertiseLinksArray },
  });
}
