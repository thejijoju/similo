module.exports = {
  up(queryInterface) {
    // logic for transforming into the new state
    return queryInterface.removeColumn('Companies', 'size');
  },

  down(queryInterface, Sequelize) {
    // logic for reverting the changes
    return queryInterface.addColumn('Companies', 'size', Sequelize.STRING);
  },
};
