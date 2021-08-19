// const { getOne } = require('express-sequelize-crud/lib/getOne');
// const { update } = require('express-sequelize-crud/lib/update');
// const { destroy } = require('express-sequelize-crud/lib/delete');
const passport = require('passport');
const nc = require('next-connect')();
const { Op } = require('sequelize');

const { QueryTypes } = require('sequelize');
const {
  Company,
  CompanyIndustry,
  Industry,
  CompanyExpertise,
  CompanyLocation,
} = require('../../../../models');

// const { companyCrud } = require('../../../../helpers/cruds');
const sequelize = require('../../../../config/db');

nc.all('*', passport.authenticate('jwt'));
nc.all('*', (req, res, next) => {
  req.params.id = req.query.id;
  next();
});
// nc.get('*', getOne(companyCrud.getOne));
nc.get('*', async (req, res) => {
  const company = await Company.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: CompanyIndustry,
      },
    ],
  });

  const industriesIds = company.CompanyIndustries.map(
    (value) => value.industryId
  );

  Company.findOne({
    where: { id: req.params.id },
    raw: true,
  })
    .then((comp) => res.json({ ...comp, industriesIds }))
    .catch((e) => console.error(e));
});
// nc.put('*', update(companyCrud.update, companyCrud.getOne));
nc.put('*', async (req, res) => {
  const updateParams = { ...req.body };
  await CompanyIndustry.destroy({ where: { companyId: updateParams.id } });
  const companyIndustriesToCreate = updateParams.industriesIds.map((elem) => {
    return { companyId: updateParams.id, industryId: elem };
  });
  await CompanyIndustry.bulkCreate(companyIndustriesToCreate);
  const industries = await Industry.findAll({
    where: { id: { [Op.in]: updateParams.industriesIds } },
  });

  updateParams.industry = industries
    .map((industry) => industry.industryName)
    .join(', ')
    .trim();
  delete updateParams.createdAt;
  delete updateParams.updatedAt;
  delete updateParams.industriesIds;
  delete updateParams.id;
  const company = await Company.update(updateParams, {
    where: { id: req.params.id },
    returning: true,
    raw: true,
  });

  await sequelize.query(
    `UPDATE "Companies" SET "searchVector" = to_tsvector(name || ' ' || coalesce("HQLocation", '') 
      || ' ' || coalesce(locations, '') || ' ' 
      || coalesce(expertise, '') || ' ' || coalesce(industry, '') || ' ' || coalesce("keyPeople", '') || ' ' || coalesce("areaServed", '')) 
      WHERE id = '${req.params.id}'`,
    { type: QueryTypes.UPDATE }
  );

  res.json({ ...company[1][0] });
});
nc.delete('*', async (req, res) => {
  await CompanyIndustry.destroy({ where: { companyId: req.params.id } });
  await CompanyLocation.destroy({ where: { companyId: req.params.id } });
  await CompanyExpertise.destroy({ where: { companyId: req.params.id } });
  await Company.destroy({ where: { id: req.params.id } });
  res.json({ ok: true });
});

export default nc;
