module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.addColumn('Companies', 'marketCap', {
        type: Sequelize.BIGINT,
        transaction,
      });
      await queryInterface.addColumn('Companies', 'stockPrice', {
        type: Sequelize.FLOAT,
        transaction,
      });
      await queryInterface.addColumn('Companies', 'volume', {
        type: Sequelize.FLOAT,
        transaction,
      });
      await queryInterface.addColumn('Companies', 'open', {
        type: Sequelize.FLOAT,
        transaction,
      });
      await queryInterface.addColumn('Companies', 'priceEps', {
        type: Sequelize.FLOAT,
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
      await queryInterface.removeColumn('Companies', 'marketCap', {
        transaction,
      });
      await queryInterface.removeColumn('Companies', 'stockPrice', {
        transaction,
      });
      await queryInterface.removeColumn('Companies', 'volume', {
        transaction,
      });
      await queryInterface.removeColumn('Companies', 'open', {
        transaction,
      });
      await queryInterface.removeColumn('Companies', 'priceEps', {
        transaction,
      });
      return transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
};
