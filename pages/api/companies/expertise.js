const { Expertise } = require('../../../models/index');

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res
      .status(405)
      .json({ message: `Method ${req.method} not allowed` });
  }

  const expertise = await Expertise.findAll({
    attributes: ['expertiseName'],
  });

  const expertiseArray = expertise.map((tag) => tag.expertiseName);

  return res.json({
    status: 'success',
    data: { expertise: expertiseArray },
  });
}
