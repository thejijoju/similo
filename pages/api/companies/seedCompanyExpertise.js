const { Op } = require('sequelize');
const { Company, Expertise, CompanyExpertise } = require('../../../models');

export default async function handler(req, res) {
  const companies = await Company.findAll({
    where: {
      expertise: {
        [Op.not]: null,
      },
    },
  });

  companies.forEach((company) => {
    const expertises = company.expertise.split(',');
    expertises.forEach(async (expertise) => {
      const expertiseFromDB = await Expertise.findOne({
        where: { expertiseName: expertise.trim() },
      });

      if (expertiseFromDB) {
        await CompanyExpertise.create({
          companyId: company.id,
          expertiseId: expertiseFromDB.id,
        });
      }
    });
  });

  res.json({ message: 'success' });
}
