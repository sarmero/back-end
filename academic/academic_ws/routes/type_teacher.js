var express = require('express');
var router = express.Router();

const type_teacherxController = require('../controllers').type_teacherController;

router.get('/sql', type_teacherxController.getSQL);
router.get('/:id', type_teacherxController.getById);
router.post('/', type_teacherxController.add);
router.put('/:id', type_teacherxController.update);
router.delete('/:id', type_teacherxController.delete);


module.exports = router;