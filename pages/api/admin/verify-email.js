const nc = require('next-connect')();
const mailgun = require('../../../config/mailgun');
const { FRONT_APP_URL, EMAIL_FROM } = require('../../../constants');
const { User } = require('../../../models');

nc.post('*', async (req, res) => {
  let user;

  if (!req.body.token) {
    res.status(401).json({ message: 'URL is invalid or expired' });
    return;
  }

  try {
    user = await User.findOne({
      where: {
        verifyEmailToken: req.body.token,
      },
    });
    // eslint-disable-next-line no-empty
  } catch (e) {
    console.error(e);
  }

  if (!user) {
    res.status(401).json({ message: 'URL is invalid or expired' });
    return;
  }

  const { newEmail } = user;
  await user.update({
    email: user.newEmail,
    newEmail: null,
    verifyEmailToken: null,
  });

  await mailgun.messages().send({
    from: EMAIL_FROM,
    to: newEmail,
    subject: 'Your credentials for Similo have been changed',
    text: `Now you can use ${newEmail} for login ${FRONT_APP_URL}/login`,
  });

  res.json({ sent: true });
});

export default nc;
