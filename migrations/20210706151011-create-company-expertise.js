module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CompanyExpertises', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v1()'),
        allowNull: false,
        primaryKey: true,
      },
      companyId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Companies',
          key: 'id',
        },
      },
      expertiseId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Expertises',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('CompanyExpertises');
  },
};
