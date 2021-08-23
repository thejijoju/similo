module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('Companies', 'order', {
        type: Sequelize.INTEGER,
      }),
    ]);
  },

  down: (queryInterface) => {
    return Promise.all([queryInterface.removeColumn('Companies', 'order')]);
  },
};
