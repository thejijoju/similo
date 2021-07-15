const path = require('path');
const fs = require('fs');
const util = require('util');

const deleteFile = util.promisify(fs.unlink);

const Downloader = require('nodejs-file-downloader');

const { LOGOS_PATH, UPLOADS_PATH } = require('../constants/index');

// eslint-disable-next-line consistent-return
module.exports = async function importLogo(company) {
  let fileName;
  if (company.logoLocalPath) {
    try {
      await deleteFile(
        path.join(UPLOADS_PATH, LOGOS_PATH, company.logoLocalPath.split('/')[1])
      );
    } catch (error) {
      console.log(error);
    }
  }

  const downloader = new Downloader({
    url: company.logoPath,
    directory: path.join(UPLOADS_PATH, LOGOS_PATH),
    onBeforeSave: (deducedName) => {
      fileName = deducedName;
    },
  });

  try {
    await downloader.download();
    return company.update({ logoLocalPath: `${LOGOS_PATH}/${fileName}` });
  } catch (error) {
    console.log(error);
  }
};
