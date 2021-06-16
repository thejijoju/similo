module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('Companies', 'searchVector', {
        type: Sequelize.DataTypes.TSVECTOR,
      }),
    ]);
  },

  down: (queryInterface) => {
    return Promise.all([
      queryInterface.removeColumn('Companies', 'searchVector'),
    ]);
  },
};
