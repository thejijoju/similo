const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Company.hasMany(models.CompanyLocation, {
        foreignKey: 'companyId',
        otherKey: 'locationId',
        onDelete: 'cascade',
        hooks: true,
      });
      Company.belongsToMany(models.Location, {
        through: models.CompanyLocation,
        foreignKey: 'companyId',
        otherKey: 'locationId',
        onDelete: 'cascade',
        hooks: true,
      });
      Company.belongsToMany(models.Expertise, {
        through: models.CompanyExpertise,
        foreignKey: 'companyId',
        otherKey: 'expertiseId',
        onDelete: 'cascade',
        hooks: true,
      });
      Company.belongsToMany(models.Industry, {
        through: models.CompanyIndustry,
        foreignKey: 'companyId',
        otherKey: 'industryId',
        onDelete: 'cascade',
        hooks: true,
      });
      Company.hasMany(models.CompanyIndustry, {
        foreignKey: 'companyId',
        otherKey: 'industryId',
        onDelete: 'cascade',
        hooks: true,
      });
      Company.hasMany(models.CompanyCSR, {
        foreignKey: 'companyId',
        otherKey: 'csrId',
        onDelete: 'cascade',
        hooks: true,
      });
      Company.belongsToMany(models.CSR, {
        through: models.CompanyCSR,
        foreignKey: 'companyId',
        otherKey: 'csrId',
        onDelete: 'cascade',
        hooks: true,
      });
      Company.hasMany(models.CSRLink, {
        foreignKey: 'companyId',
        onDelete: 'cascade',
        hooks: true,
      });
      Company.hasMany(models.ExpertiseLink, {
        foreignKey: 'companyId',
        onDelete: 'cascade',
        hooks: true,
      });
    }
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
        type: DataTypes.STRING(10240),
      },
      websiteUrl: {
        type: DataTypes.STRING,
      },
      HQLocation: {
        type: DataTypes.STRING,
      },
      locations: {
        type: DataTypes.STRING(2048),
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
        type: DataTypes.STRING(2048),
      },
      searchVector: {
        type: DataTypes.TSVECTOR,
      },
      subsidiaries: {
        type: DataTypes.STRING(2048),
      },
      logoLocalPath: {
        type: DataTypes.STRING,
      },
      areaServed: {
        type: DataTypes.STRING,
      },
      keyPeople: {
        type: DataTypes.TEXT,
      },
      order: {
        type: DataTypes.INTEGER,
      },
      hasUderrepresentedMinorities: {
        type: DataTypes.BOOLEAN,
      },
      hasFemaleCEO: {
        type: DataTypes.BOOLEAN,
      },
      csr: {
        type: DataTypes.STRING,
      },
      stockData: {
        type: DataTypes.TEXT,
      },
      stockSymbol: {
        type: DataTypes.STRING,
      },
      marketCap: {
        type: DataTypes.BIGINT,
      },
      stockPrice: {
        type: DataTypes.FLOAT,
      },
      volume: {
        type: DataTypes.FLOAT,
      },
      open: {
        type: DataTypes.FLOAT,
      },
      priceEps: {
        type: DataTypes.FLOAT,
      },
      about: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Company',
      indexes: [
        {
          fields: ['searchVector'],
          using: 'gin',
        },
      ],
    }
  );
  return Company;
};
