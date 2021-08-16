module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.addColumn('Companies', 'keyPeople', {
        type: Sequelize.STRING,
        transaction,
      });
      await queryInterface.addColumn('Companies', 'areaServed', {
        type: Sequelize.STRING,
        transaction,
      });
      return transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },

  down: async (queryInterface) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.removeColumn('Companies', 'keyPeople', {
        transaction,
      });
      await queryInterface.removeColumn('Companies', 'areaServed', {
        transaction,
      });
      return transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
};
