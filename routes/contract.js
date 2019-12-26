var express = require('express');
var router = express.Router();
const contractController = require('../controller/contract');

router.get('/', contractController.listContract);
router.post('/UpdateStatus', contractController.UpdateStatus)
router.get('/BUDGET', contractController.BUDGET)
router.get('/TOTAL', contractController.TOTAL)

module.exports = router