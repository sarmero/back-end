var express = require('express');
var router = express.Router();

const formationxController = require('../controllers').formationController;

router.get('/sql', formationxController.getSQL);
router.get('/:id', formationxController.getById);
router.post('/', formationxController.add);
router.put('/:id', formationxController.update);
router.delete('/:id', formationxController.delete);


module.exports = router;