const express = require('express');
const AuthController = require('../controllers/userAuth');

const router = express.Router();

router.post('/register-user',AuthController.registerUser);
router.post('/login-user',AuthController.LoginUser);






module.exports = router;