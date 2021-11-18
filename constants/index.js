const path = require('path');

module.exports = {
  API_URL: process.env.NEXT_PUBLIC_API_URL,
  FRONT_APP_URL: process.env.FRONT_APP_URL,
  ADMIN_APP_URL: process.env.ADMIN_APP_URL,

  SECRET_KEY: process.env.SECRET_KEY,

  COMPANIES_PER_PAGE: 10,
  UPLOADS_PATH: path.join(process.cwd(), 'public', 'uploads'),
  LOGOS_PATH: 'logos',

  AUTH_TOKEN_EXPIRATION_TIME: '30m',
  RESET_PASSWORD_TOKEN_EXPIRATION_TIME: '120m',
  EMAIL_FROM: `Support <support@${process.env.MAILGUN_DOMAIN}>`,
  FEEDBACK_EMAIL: process.env.FEEDBACK_EMAIL,

  YAHOO_FINANCE_API_KEY: process.env.YAHOO_FINANCE_API_KEY,
};
