var express = require('express');
var router = express.Router();

const evaluationxController = require('../controllers').evaluationController;

router.get('/sql', evaluationxController.getSQL);
router.get('/:id', evaluationxController.getById);
router.post('/', evaluationxController.add);
router.put('/:id', evaluationxController.update);
router.delete('/:id', evaluationxController.delete);


module.exports = router;