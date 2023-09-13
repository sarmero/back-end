var express = require('express');
var router = express.Router();

const facultyxController = require('../controllers').facultyController;

router.get('/sql', facultyxController.getSQL);
router.get('/:id', facultyxController.getById);
router.post('/', facultyxController.add);
router.put('/:id', facultyxController.update);
router.delete('/:id', facultyxController.delete);


module.exports = router;