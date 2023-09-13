var express = require('express');
var router = express.Router();

const teacherxController = require('../controllers').teacherController;

router.get('/sql', teacherxController.getSQL);
router.get('/:id', teacherxController.getById);
router.post('/', teacherxController.add);
router.put('/:id', teacherxController.update);
router.delete('/:id', teacherxController.delete);


module.exports = router;