var express = require('express');
var router = express.Router();

const employController = require('../controllers').employController;

router.get('/', employController.list);


module.exports = router;
