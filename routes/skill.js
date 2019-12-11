var express = require('express');
var router = express.Router();
const skillController = require('../controller/skill');

router.get('/', skillController.listSkill);
router.post('/newskill', skillController.NewSkill);

module.exports = router;
