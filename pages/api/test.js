const importLogo = require('../../helpers/importLogo');

export default async function handler(req, res) {
  const logoPath = await importLogo(
    'https://media-exp1.licdn.com/dms/image/C4D0BAQHS140tPznkEA/company-logo_200_200/0/1611824900186?e=1631145600&v=beta&t=TWKZUmXsRB2O6ouyRd_4phFSQYL4da9PnBTOOMWYnlg'
  );
  console.log(logoPath);
  res.json({ message: logoPath });
}
