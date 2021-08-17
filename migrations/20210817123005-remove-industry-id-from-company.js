module.exports = {
  up(queryInterface) {
    // logic for transforming into the new state
    return queryInterface.removeColumn('Companies', 'industryId');
  },

  down(queryInterface, Sequelize) {
    // logic for reverting the changes
    return queryInterface.addColumn('Companies', 'industryId', Sequelize.UUID);
  },
};
