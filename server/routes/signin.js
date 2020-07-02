const express = require('express');
const router = express.Router();

// get signinController
const { signinController } = require('../controllers');

// * POST /signin
router.post('/', signinController.post);

module.exports = router;