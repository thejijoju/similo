const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Expertise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Expertise.belongsToMany(models.Company, {
        through: models.CompanyExpertise,
        foreignKey: 'expertiseId',
        otherKey: 'companyId',
        onDelete: 'cascade',
        hooks: true,
      });
    }
  }
  Expertise.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        allowNull: false,
        primaryKey: true,
      },
      expertiseName: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Expertise',
    }
  );
  return Expertise;
};
