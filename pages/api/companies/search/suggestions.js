const { Op } = require('sequelize');
const { Company } = require('../../../../models');

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res
      .status(405)
      .json({ message: `Method ${req.method} not allowed` });
  }

  const searchTerm = req.query.term;

  const companies = await Company.findAll({
    where: { name: { [Op.iLike]: `%${searchTerm}%` } },
    attributes: ['name', 'industry', 'logoPath'],
    limit: 6,
  });
  return res.json({
    status: 'success',
    count: companies.length,
    data: { companies },
  });
}
