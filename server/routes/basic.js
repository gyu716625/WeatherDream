const express = require('express');

const router = express.Router();

const { basicController } = require('../controllers');

// * GET /
router.get('/', basicController.get);