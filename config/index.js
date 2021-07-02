const api = require('./api');
const passport = require('./passport');
const seeds = require('./seeds');

module.exports = (nc) => {
  api(nc);
  passport(nc);
  seeds(nc);
};
