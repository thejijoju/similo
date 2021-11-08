const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CSRLink extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CSRLink.belongsTo(models.Company, {
        foreignKey: 'companyId',
        onDelete: 'cascade',
        hooks: true,
      });
    }
  }
  CSRLink.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        allowNull: false,
        primaryKey: true,
      },
      csrName: {
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
      modelName: 'CSRLink',
    }
  );
  return CSRLink;
};
