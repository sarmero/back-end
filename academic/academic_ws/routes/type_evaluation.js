var express = require('express');
var router = express.Router();

const type_evaluationxController = require('../controllers').type_evaluationController;

router.get('/sql', type_evaluationxController.getSQL);
router.get('/:id', type_evaluationxController.getById);
router.post('/', type_evaluationxController.add);
router.put('/:id', type_evaluationxController.update);
router.delete('/:id', type_evaluationxController.delete);


module.exports = router;