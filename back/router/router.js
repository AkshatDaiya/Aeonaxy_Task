const express = require('express');
const router = express.Router();
const upload = require('../helper/multer.js');
const registrationController = require('../controllers/regController.js');
const detailsController = require('../controllers/detailsController.js');

// Route for user registration
router.post('/reg', registrationController.registration);

// Route for submitting details
router.post('/details', upload.single('image'), detailsController.otherDetails);

module.exports = router;
