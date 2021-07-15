module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Companies', 'logoPath', {
      type: Sequelize.STRING(10240),
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Companies', 'logoPath', {
      type: Sequelize.STRING(2048),
    });
  },
};
