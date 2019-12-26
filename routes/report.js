var express = require('express');
var router = express.Router();
var Reportcontroller = require('../controller/report');
/* GET home page. */

router.get('/', Reportcontroller.listReport);


module.exports = router;
