const { CSR } = require('../../../models/index');

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res
      .status(405)
      .json({ message: `Method ${req.method} not allowed` });
  }
  const csrs = await CSR.findAll({
    attributes: ['csrName'],
    order: [['csrName', 'ASC']],
  });

  const csrsArray = csrs.map((csr) => csr.csrName);

  return res.json({
    status: 'success',
    data: { csr: csrsArray },
  });
}
