require('dotenv-flow').config();
const express = require('express');
const { parse } = require('url');
const next = require('next');
const configure = require('./config');
const sequelize = require('./config/db');
const defaultErrorHandler = require('./helpers/defaultErrorHandler');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

const app = express();

configure(app);
app.use((req, res) => {
  const parsedUrl = parse(req.url, true);
  nextHandler(req, res, parsedUrl);
});
app.use('/', express.static('public'));
app.use(defaultErrorHandler);

nextApp
  .prepare()
  .then(() => sequelize.authenticate())
  .then(() => {
    const server = app.listen(process.env.PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`  Server Listening on port ${server.address().port}`);
    });
  })
  .catch((error) => console.log(error));
