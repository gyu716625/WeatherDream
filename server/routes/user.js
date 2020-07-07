const express = require('express');

const router = express.Router();

// get signinController
const { userController } = require('../controllers');

// * POST /signin
router.post('/signin', userController.signin.post);

// * POST /signup
router.post('/signup', userController.signup.post);

// * GET /signout
router.get('/signout', userController.signout.get);

// * GET /mypage/info/:id
router.get('/mypage/info/:userId', userController.mypage.info.get);

// * GET /mypage/diary/:id
router.get('/mypage/diary/:userId', userController.mypage.diary.get);

module.exports = router;
