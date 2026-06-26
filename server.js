require('dotenv-flow').config();
const express = require('express');
const { parse } = require('url');
const next = require('next');
const api = require('./config/api');
const passport = require('./config/passport');
const defaultErrorHandler = require('./helpers/defaultErrorHandler');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

const app = express();

api(app);
passport(app);

app.use((req, res) => {
  const parsedUrl = parse(req.url, true);
  nextHandler(req, res, parsedUrl);
});
app.use('/', express.static('public'));
app.use(defaultErrorHandler);

nextApp
  .prepare()
  .then(() => {
    const server = app.listen(process.env.PORT, () => {
      console.log(`  Server Listening on port ${server.address().port}`);
    });
  })
  .catch((error) => console.log(error));
