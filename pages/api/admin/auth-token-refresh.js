const nc = require('next-connect')();

const { User } = require('../../../models');
const { createAndSaveAuthTokens } = require('../../../helpers/tokens');

nc.post('*', async (req, res) => {
  let user;
  try {
    user = await User.findOne({
      where: {
        id: req.body.userId,
        refreshToken: req.body.refreshToken,
      },
    });
    // eslint-disable-next-line no-empty
  } catch (e) {}

  if (!user) {
    res.status(401).json({ key: 'error.token-expired' });
    return;
  }

  const tokenData = await createAndSaveAuthTokens(user, req);
  res.json(tokenData);
});

export default nc;
