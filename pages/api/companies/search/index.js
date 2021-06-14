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
    where: {
      [Op.or]: [
        { name: { [Op.iLike]: `%${searchTerm}%` } },
        { HQLocation: { [Op.iLike]: `%${searchTerm}%` } },
        { locations: { [Op.iLike]: `%${searchTerm}%` } },
        { country: { [Op.iLike]: `%${searchTerm}%` } },
        { expertise: { [Op.iLike]: `%${searchTerm}%` } },
        { industry: { [Op.iLike]: `%${searchTerm}%` } },
      ],
    },
  });
  return res.json({
    status: 'success',
    count: companies.length,
    data: { companies },
  });
}
