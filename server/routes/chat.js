const express = require('express');

const router = express.Router();

const { chatController } = require('../controllers');

router.get('/', chatController.participation);

module.exports = router;
