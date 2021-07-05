const { Company } = require('../../../models/index');

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res
      .status(405)
      .json({ message: `Method ${req.method} not allowed` });
  }

  const expertise = await Company.findAll({ attributes: ['expertise'] });

  const tagsSet = new Set();

  expertise.forEach((elem) => {
    if (elem.expertise) {
      const tagsArray = elem.expertise.split(',');
      tagsArray.forEach((tag) => {
        if (tag === '') {
          return;
        }
        tagsSet.add(tag.trim());
      });
    }
  });

  return res.json({
    status: 'success',
    data: { expertise: Array.from(tagsSet) },
  });
}
