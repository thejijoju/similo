const nc = require('next-connect')();

const { StaticPage } = require('../../../../models');

nc.get('*', async (req, res) => {
  try {
    const page = await StaticPage.findOne({
      where: { title: req.query.title },
    });
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
