const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ExpertiseLink extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ExpertiseLink.belongsTo(models.Company, {
        foreignKey: 'companyId',
        onDelete: 'cascade',
        hooks: true,
      });
    }
  }
  ExpertiseLink.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        allowNull: false,
        primaryKey: true,
      },
      expertiseName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      companyId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'ExpertiseLink',
    }
  );
  return ExpertiseLink;
};
