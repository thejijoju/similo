const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CSR extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CSR.hasMany(models.CompanyCSR, {
        foreignKey: 'csrId',
      });
      CSR.belongsToMany(models.Company, {
        through: models.CompanyCSR,
        foreignKey: 'csrId',
        otherKey: 'companyId',
        onDelete: 'cascade',
        hooks: true,
      });
    }
  }
  CSR.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        allowNull: false,
        primaryKey: true,
      },
      csrName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'CSR',
    }
  );
  return CSR;
};
