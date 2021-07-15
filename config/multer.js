const multer = require('multer');

// USAGE:
// post('/some', imageUploader.single('fieldName'), (req) => {
//   console.log(req.file);
//   return Some.create({ someImagePath: toUiPath(req.file.path) })
//     .catch(next);
// });

const csvStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `${process.cwd()}/pages/api/admin/companies/import`);
  },

  filename: (req, file, cb) => {
    const extension = /\.([a-z0-9]+)$/i.exec(file.originalname)[1];
    const fileName = `companies.${extension}`;

    cb(null, fileName);
  },
});

module.exports = {
  csvUploader: multer({
    storage: csvStorage,
    limits: { fileSize: 20 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
      if (
        file.mimetype !== 'text/csv' &&
        file.mimetype !== 'application/vnd.ms-excel'
      ) {
        cb(new Error('Wrong file type'));
        return;
      }

      cb(null, true);
    },
  }),
};
