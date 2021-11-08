module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.addColumn(
        'Companies',
        'hasUderrepresentedMinorities',
        {
          type: Sequelize.BOOLEAN,
          transaction,
        }
      );
      await queryInterface.addColumn('Companies', 'hasFemaleCEO', {
        type: Sequelize.BOOLEAN,
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
      await queryInterface.removeColumn(
        'Companies',
        'hasUderrepresentedMinorities',
        {
          transaction,
        }
      );
      await queryInterface.removeColumn('Companies', 'hasFemaleCEO', {
        transaction,
      });
      return transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
};
