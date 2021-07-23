const crypto = require('crypto');

const encrypt = (data, encryptionHash) =>
  crypto.pbkdf2Sync(data, encryptionHash, 1, 128, 'sha1').toString('base64');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      email: {
        type: DataTypes.STRING(50),
        validate: {
          isEmail: true,
        },
      },
      refreshToken: {
        type: DataTypes.STRING,
        unique: true,
      },
      encryptionHash: {
        type: DataTypes.STRING,
      },
      encryptedPassword: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.VIRTUAL,
        set(password) {
          const encryptionHash = crypto.randomBytes(128).toString('base64');
          this.setDataValue('password', password);
          this.setDataValue('encryptionHash', encryptionHash);
          this.setDataValue(
            'encryptedPassword',
            encrypt(password, encryptionHash)
          );
        },
      },
      verifyEmailToken: {
        type: DataTypes.STRING,
      },
      newEmail: {
        type: DataTypes.STRING,
      },
      resetPasswordToken: {
        type: DataTypes.STRING,
      },
    },
    {
      indexes: [
        {
          unique: true,
          name: 'user_unique_email',
          fields: [sequelize.fn('lower', sequelize.col('email'))],
        },
      ],
    }
  );

  User.prototype.toJSON = function () {
    const values = { ...this.get() };

    delete values.password;
    delete values.encryptionHash;
    delete values.encryptedPassword;
    delete values.refreshToken;
    return values;
  };

  User.prototype.isEqualPassword = function (password) {
    console.log(this);
    return encrypt(password, this.encryptionHash) === this.encryptedPassword;
  };

  return User;
};
