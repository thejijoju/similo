module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Companies', 'keyPeople', {
      type: Sequelize.TEXT,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Companies', 'keyPeople', {
      type: Sequelize.STRING,
    });
  },
};
