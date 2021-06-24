const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Location.belongsToMany(models.Company, {
        through: 'CompanyLocations',
        foreignKey: 'locationId',
        otherKey: 'companyId',
      });
    }
  }
  Location.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        allowNull: false,
        primaryKey: true,
      },
      city: DataTypes.STRING,
      country: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Location',
    }
  );
  return Location;
};
