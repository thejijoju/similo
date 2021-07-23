const nc = require('next-connect')();
const mailgun = require('../../../config/mailgun');
const { ADMIN_APP_URL, EMAIL_FROM } = require('../../../constants');
const { User } = require('../../../models');
const { createAndSaveResetPasswordToken } = require('../../../helpers/tokens');

nc.post('*', async (req, res) => {
  let user;
  try {
    user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    // eslint-disable-next-line no-empty
  } catch (e) {}

  if (!user) {
    res.status(404).json({ message: 'Email was not registered' });
    return;
  }

  const token = await createAndSaveResetPasswordToken(user);
  await mailgun.messages().send({
    from: EMAIL_FROM,
    to: user.email,
    subject: 'Reset password for Similo',
    text: `Follow the link to reset your password: ${ADMIN_APP_URL}/#/set-new-password?token=${token}`,
  });

  res.json({ sent: true });
});

export default nc;
