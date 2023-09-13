var express = require('express');
var router = express.Router();

const professionxController = require('../controllers').professionController;

router.get('/program', professionxController.departmentById);
router.get('/sql', professionxController.getSQL);
router.get('/:id', professionxController.getById);
router.post('/', professionxController.add);
router.put('/:id', professionxController.update);
router.delete('/:id', professionxController.delete);


module.exports = router;