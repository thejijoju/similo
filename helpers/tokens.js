/* eslint-disable no-param-reassign */
const jsonWebToken = require('jsonwebtoken');
const randToken = require('rand-token');
const {
  SECRET_KEY,
  AUTH_TOKEN_EXPIRATION_TIME,
  RESET_PASSWORD_TOKEN_EXPIRATION_TIME,
} = require('../constants');

/**
 * @typedef AuthTokensData
 * @property {integer} userId
 * @property {string} accessToken
 * @property {string} refreshToken
 */

const createAndSaveAuthTokens = async (user, req) => {
  const payload = {
    id: user.id,
    role: user.role,
    email: user.email,
  };
  const token = jsonWebToken.sign(payload, SECRET_KEY, {
    expiresIn: AUTH_TOKEN_EXPIRATION_TIME,
  });
  const refreshToken = randToken.uid(255);

  user.refreshToken = refreshToken;
  user.lastLoginAt = Date.now();
  user.lastGeoIP =
    req.headers['x-forwarded-for'] ||
    req.headers['x-real-ip'] ||
    req.connection.remoteAddress;
  await user.save();

  return { userId: user.id, accessToken: `JWT ${token}`, refreshToken };
};

const createAndSaveResetPasswordToken = async (user) => {
  const payload = {
    id: user.id,
  };
  const resetPasswordToken = jsonWebToken.sign(payload, SECRET_KEY, {
    expiresIn: RESET_PASSWORD_TOKEN_EXPIRATION_TIME,
  });
  user.resetPasswordToken = resetPasswordToken;
  await user.save();

  return resetPasswordToken;
};

const createAndSaveVerifyEmailToken = async (user) => {
  const payload = {
    id: user.id,
  };
  const verifyEmailToken = jsonWebToken.sign(payload, SECRET_KEY, {
    expiresIn: RESET_PASSWORD_TOKEN_EXPIRATION_TIME,
  });
  user.verifyEmailToken = verifyEmailToken;
  await user.save();

  return verifyEmailToken;
};

module.exports = {
  createAndSaveAuthTokens,
  createAndSaveResetPasswordToken,
  createAndSaveVerifyEmailToken,
};
