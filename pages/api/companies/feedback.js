const mailgun = require('../../../config/mailgun');
const { EMAIL_FROM, FEEDBACK_EMAIL } = require('../../../constants');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res
      .status(405)
      .json({ message: `Method ${req.method} not allowed` });
  }
  try {
    await mailgun.messages().send({
      from: EMAIL_FROM,
      to: FEEDBACK_EMAIL,
      subject: `${req.body.company} feedback`,
      text: req.body.feedback,
    });
    return res.json({
      status: 'success',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 'fail', message: error });
  }
}
