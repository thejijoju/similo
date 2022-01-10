const { getOne } = require('express-sequelize-crud/lib/getOne');
const { update } = require('express-sequelize-crud/lib/update');
// const { destroy } = require('express-sequelize-crud/lib/delete');
const passport = require('passport');
const nc = require('next-connect')();

const { industryCrud } = require('../../../../helpers/cruds');
const {
  Industry,
  Company,
  CompanyCSR,
  CompanyExpertise,
  CompanyIndustry,
  CompanyLocation,
} = require('../../../../models');

nc.all('*', passport.authenticate('jwt'));
nc.all('*', (req, res, next) => {
  req.params.id = req.query.id;
  next();
});
nc.get('*', getOne(industryCrud.getOne));
nc.put('*', update(industryCrud.update, industryCrud.getOne));
// nc.delete('*', destroy(industryCrud.destroy));

nc.delete('*', async (req, res) => {
  try {
    const industry = await Industry.findOne({
      where: { id: req.params.id },
      include: Company,
    });
    const companiesIds = industry.Companies.map((company) => company.id);

    await CompanyCSR.destroy({ where: { companyId: companiesIds } });
    await CompanyExpertise.destroy({ where: { companyId: companiesIds } });
    await CompanyIndustry.destroy({ where: { companyId: companiesIds } });
    await CompanyLocation.destroy({ where: { companyId: companiesIds } });

    await Company.destroy({ where: { id: companiesIds } });
    await industry.destroy();

    res.json({ ok: true });
  } catch (error) {
    console.log(error);
    res.status(500);
  }
});

export default nc;
