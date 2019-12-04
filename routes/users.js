var express = require('express');
var router = express.Router();

const userController = require('../controller/user')

router.get('/', userController.defaultRouter);

router.post('/login', userController.loginUser)

router.post('/register',userController.registerUser);

router.get('/me', userController.getUser);
module.exports = router;
