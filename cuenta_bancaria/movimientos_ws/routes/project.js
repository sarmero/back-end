var express = require('express');
var router = express.Router();
const projectController = require('../controllers').bankController;

router.get('/', projectController.list);

module.exports = router;
