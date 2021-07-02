const morganLogger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

module.exports = (nc) => {
  nc.use(morganLogger('dev'));
  nc.use(bodyParser.urlencoded({ extended: false }));
  nc.use(bodyParser.json({ limit: process.env.MAX_BODY_LIMIT }));
  nc.use(cors());
};
