var express = require('express');
var router = express.Router();
const contractController = require('../controller/contract');

router.get('/', contractController.listContract);
router.post('/UpdateStatus', contractController.UpdateStatus)

module.exports = router