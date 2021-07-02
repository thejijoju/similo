const { User } = require('../models');

module.exports = async () => {
  const adminUser = await User.findOne({
    where: { email: process.env.ADMIN_EMAIL },
  });

  if (!adminUser) {
    User.create({
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD,
    }).then((user) => console.info(`User ${user.email} created`));
  }
};
