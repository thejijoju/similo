const nc = require('next-connect')();
const passport = require('passport');

const mailgun = require('../../../config/mailgun');
const { ADMIN_APP_URL, EMAIL_FROM } = require('../../../constants');
const { User } = require('../../../models');
const { createAndSaveVerifyEmailToken } = require('../../../helpers/tokens');

nc.all('*', passport.authenticate('jwt'));

nc.post('*', async (req, res) => {
  let user;
  const newEmail = req.body.email;
  try {
    user = await User.findOne({
      where: {
        id: req.user.id,
      },
    });
    // eslint-disable-next-line no-empty
  } catch (e) {}

  if (!user) {
    res.status(404).json({ message: 'User does not exist' });
    return;
  }
  if (!newEmail) {
    res.status(400).json({ message: 'No email provided' });
    return;
  }

  const token = await createAndSaveVerifyEmailToken(user);
  await user.update({ newEmail });
  await mailgun.messages().send({
    from: EMAIL_FROM,
    to: newEmail,
    subject: 'Validate new email for your account on Similo',
    text: `Follow the link to verify your email: ${ADMIN_APP_URL}/#/verify-email?token=${token}`,
  });

  res.json({ sent: true });
});

export default nc;
