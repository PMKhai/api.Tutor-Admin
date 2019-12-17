var express = require('express');
var router = express.Router();
const contractController = require('../controller/contract');

router.get('/', contractController.listContract);

module.exports = router