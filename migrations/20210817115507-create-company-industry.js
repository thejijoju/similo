module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CompanyIndustries', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v1()'),
        allowNull: false,
        primaryKey: true,
      },
      companyId: {
        type: Sequelize.UUID,
        references: {
          model: 'Companies',
          key: 'id',
        },
      },
      industryId: {
        type: Sequelize.UUID,
        references: {
          model: 'Industries',
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
    await queryInterface.dropTable('CompanyIndustries');
  },
};
