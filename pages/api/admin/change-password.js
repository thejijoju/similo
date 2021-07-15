const nc = require('next-connect')();
const passport = require('passport');
const { User } = require('../../../models');

nc.all('*', passport.authenticate('jwt'));

nc.post('*', async (req, res) => {
  let user;
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

  if (!user.isEqualPassword(req.body.password)) {
    res.status(401).json({
      message: 'No such user or password is invalid',
    });
    return;
  }

  const { newPassword } = req.body;
  if (!newPassword) {
    res.status(401).json({
      message: 'New password is not provided',
    });
    return;
  }

  try {
    await user.update({ password: newPassword });
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong',
    });
    return;
  }

  res.json({ sent: true });
});

export default nc;
