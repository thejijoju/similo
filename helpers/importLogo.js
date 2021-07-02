const path = require('path');

const Downloader = require('nodejs-file-downloader');

const { LOGOS_PATH, UPLOADS_PATH } = require('../constants/index');

// eslint-disable-next-line consistent-return
module.exports = async function importLogo(logoUrl) {
  let fileName;
  const downloader = new Downloader({
    url: logoUrl,
    directory: path.join(UPLOADS_PATH, LOGOS_PATH),
    onBeforeSave: (deducedName) => {
      fileName = deducedName;
    },
  });

  try {
    await downloader.download();
    return `${LOGOS_PATH}/${fileName}`;
  } catch (error) {
    console.log(error);
  }
};
