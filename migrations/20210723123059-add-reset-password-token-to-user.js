module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('Users', 'resetPasswordToken', {
        type: Sequelize.STRING,
      }),
    ]);
  },

  down: (queryInterface) => {
    return Promise.all([
      queryInterface.removeColumn('Users', 'resetPasswordToken'),
    ]);
  },
};
