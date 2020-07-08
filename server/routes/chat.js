const express = require('express');

const router = express.Router();

const { chatController } = require('../controllers');

router.get('/:user_id', chatController.participation);

module.exports = router;
