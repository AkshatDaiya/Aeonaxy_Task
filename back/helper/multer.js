const multer = require('multer');
const path = require('path');

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../front/public/upload'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
});

let upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 4
  }
});

module.exports = upload;