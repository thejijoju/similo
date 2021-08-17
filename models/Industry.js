const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Industry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Industry.hasMany(models.CompanyIndustry, {
        foreignKey: 'industryId',
      });
      Industry.belongsToMany(models.Company, {
        through: models.CompanyIndustry,
        foreignKey: 'industryId',
        otherKey: 'companyId',
        onDelete: 'cascade',
        hooks: true,
      });
    }
  }
  Industry.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        allowNull: false,
        primaryKey: true,
      },
      industryName: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Industry',
    }
  );
  return Industry;
};
