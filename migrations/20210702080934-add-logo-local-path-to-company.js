module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('Companies', 'logoLocalPath', {
        type: Sequelize.STRING,
      }),
    ]);
  },

  down: (queryInterface) => {
    return Promise.all([
      queryInterface.removeColumn('Companies', 'logoLocalPath'),
    ]);
  },
};
