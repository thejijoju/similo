module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Companies', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v1()'),
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      logoPath: {
        type: Sequelize.STRING,
      },
      websiteUrl: {
        type: Sequelize.STRING,
      },
      HQLocation: {
        type: Sequelize.STRING,
      },
      locations: {
        type: Sequelize.STRING,
      },
      country: {
        type: Sequelize.STRING,
      },
      parentCompany: {
        type: Sequelize.STRING,
      },
      founder: {
        type: Sequelize.STRING,
      },
      industry: {
        type: Sequelize.STRING,
      },
      size: {
        type: Sequelize.STRING,
      },
      employeesCount: {
        type: Sequelize.STRING,
      },
      revenue: {
        type: Sequelize.STRING,
      },
      yearOfFoundation: {
        type: Sequelize.INTEGER,
      },
      type: {
        type: Sequelize.STRING,
      },
      expertise: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('Companies');
  },
};
