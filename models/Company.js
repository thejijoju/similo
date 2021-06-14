const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    /*  static associate(models) {
      // define association here
    } */
  }
  Company.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      logoPath: {
        type: DataTypes.STRING,
      },
      websiteUrl: {
        type: DataTypes.STRING,
      },
      HQLocation: {
        type: DataTypes.STRING,
      },
      parentCompany: {
        type: DataTypes.STRING,
      },
      founder: {
        type: DataTypes.STRING,
      },
      industry: {
        type: DataTypes.STRING,
      },
      size: {
        type: DataTypes.STRING,
      },
      employeesCount: {
        type: DataTypes.INTEGER,
      },
      revenue: {
        type: DataTypes.BIGINT,
      },
      yearOfFoundation: {
        type: DataTypes.INTEGER,
      },
      type: {
        type: DataTypes.STRING,
      },
      expertise: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'Company',
    }
  );
  return Company;
};
