const passwordGenerator = require('generate-password');
const nc = require('next-connect')();
const mailgun = require('../../../config/mailgun');
const { FRONT_APP_URL, EMAIL_FROM } = require('../../../constants');
const { User } = require('../../../models');

nc.post('*', async (req, res) => {
  let user;
  try {
    user = await User.findOne({
      where: {
        resetPasswordToken: req.body.token,
      },
    });
    // eslint-disable-next-line no-empty
  } catch (e) {
    console.error(e);
  }

  if (!user) {
    res.status(401).json({ key: 'error.url-is-invalid-or-expired' });
    return;
  }

  const password = passwordGenerator.generate();
  user.password = password;
  await user.save(user);

  await mailgun.messages().send({
    from: EMAIL_FROM,
    to: user.email,
    subject: 'Your new password for Similo',
    text: `Your new password is: ${password}\nUse it for login ${FRONT_APP_URL}/login`,
  });

  res.json({ sent: true });
});

export default nc;
