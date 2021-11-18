const passport = require('passport');
const nc = require('next-connect')();

const { StaticPage } = require('../../../../models');

nc.all('*', passport.authenticate('jwt'));

nc.post('*', async (req, res) => {
  const { title, url, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ status: 'fail', message: 'Missing data' });
  }

  try {
    const page = await StaticPage.upsert(
      { title, url, content },
      { returning: true }
    );

    return res.json({
      status: 'success',
      data: { page },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 'fail', message: error });
  }
});

export default nc;
