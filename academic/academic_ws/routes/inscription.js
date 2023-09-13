var express = require('express');
var router = express.Router();

const inscriptionxController = require('../controllers').inscriptionController;

router.get('/inscription', inscriptionxController.students_enrolled);
router.get('/sql', inscriptionxController.getSQL);
router.get('/:id', inscriptionxController.getById);
router.post('/', inscriptionxController.add);
router.put('/:id', inscriptionxController.update);
router.delete('/:id', inscriptionxController.delete);


module.exports = router;