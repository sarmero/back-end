var express = require('express');
var router = express.Router();

const rollexController = require('../controllers').rolleController;

router.get('/sql', rollexController.getSQL);
router.get('/:id', rollexController.getById);
router.post('/', rollexController.add);
router.put('/:id', rollexController.update);
router.delete('/:id', rollexController.delete);


module.exports = router;