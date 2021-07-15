const { User } = require('../models');

module.exports = async () => {
  const user = await User.findOne();

  if (!user) {
    User.create({
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD,
    }).then((user) => console.info(`User ${user.email} created`));
  }
};
