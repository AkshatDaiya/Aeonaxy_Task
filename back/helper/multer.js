const multer = require('multer');

let storage = multer.memoryStorage();

let upload = multer({
  storage: storage,
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
});

module.exports = upload;