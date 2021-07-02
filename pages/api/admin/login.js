const nc = require('next-connect')();
const { User } = require('../../../models');
const { createAndSaveAuthTokens } = require('../../../helpers/tokens');

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

  console.log(user);
  if (!user || !user.isEqualPassword(req.body.password)) {
    console.log('error.login-or-password');
    res.status(401).json({
      key: 'error.login-or-password',
      message: 'No such user or password is invalid',
    });
    return;
  }
  console.log('createAndSaveAuthTokens');

  const tokenData = await createAndSaveAuthTokens(user, req);
  console.log('json');
  res.json(tokenData);
});

export default nc;
