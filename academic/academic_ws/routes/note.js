var express = require('express');
var router = express.Router();

const notexController = require('../controllers').noteController;

router.get('/sql', notexController.getSQL);
router.get('/:id', notexController.getById);
router.post('/', notexController.add);
router.put('/:id', notexController.update);
router.delete('/:id', notexController.delete);


module.exports = router;