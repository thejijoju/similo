module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('Companies', 'subsidiaries', {
        type: Sequelize.STRING(2048),
      }),
    ]);
  },

  down: (queryInterface) => {
    return Promise.all([
      queryInterface.removeColumn('Companies', 'subsidiaries'),
    ]);
  },
};
