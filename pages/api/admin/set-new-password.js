const nc = require('next-connect')();
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
    res.status(401).json({ message: 'URL is invalid or expired' });
    return;
  }

  user.password = req.body.password;
  user.resetPasswordToken = null;
  try {
    await user.save(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

  res.json({ sent: true });
});

export default nc;
