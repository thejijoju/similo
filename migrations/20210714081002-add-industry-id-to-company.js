module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Companies', 'industryId', {
      type: Sequelize.UUID,
      references: {
        model: 'Industries',
        key: 'id',
      },
    });
  },

  down: async (queryInterface) => {
    return queryInterface.removeColumn('Companies', 'industryId');
  },
};
