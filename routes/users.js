var express = require('express');
var router = express.Router();
const userController = require('../controller/user')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("API is working properly");
});
// router.get('/', Usercontroller.listUsers);

router.get('/list', userController.listUsers);

module.exports = router;
