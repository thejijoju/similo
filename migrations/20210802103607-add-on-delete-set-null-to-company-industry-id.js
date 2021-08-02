module.exports = {
  up: async (queryInterface) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.removeConstraint(
        'Companies',
        'Companies_industryId_fkey',
        {
          transaction,
        }
      );
      await queryInterface.addConstraint('Companies', {
        fields: ['industryId'],
        type: 'foreign key',
        name: 'Companies_industryId_fkey',
        references: {
          table: 'Industries',
          field: 'id',
        },
        onDelete: 'SET NULL',
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
      await queryInterface.removeConstraint(
        'Companies',
        'Companies_industryId_fkey',
        {
          transaction,
        }
      );
      await queryInterface.addConstraint('Companies', {
        fields: ['industryId'],
        type: 'foreign key',
        name: 'Companies_industryId_fkey',
        references: {
          table: 'Industries',
          field: 'id',
        },
        transaction,
      });
      return transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
};
