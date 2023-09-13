var express = require('express');
var router = express.Router();

const themexController = require('../controllers').themeController;

router.get('/sql', themexController.getSQL);
router.get('/:id', themexController.getById);
router.post('/', themexController.add);
router.put('/:id', themexController.update);
router.delete('/:id', themexController.delete);


module.exports = router;