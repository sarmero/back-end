var express = require('express');
var router = express.Router();

const subjectxController = require('../controllers').subjectController;

router.get('/program', subjectxController.program);
router.get('/dep', subjectxController.departmentById);
router.get('/sql', subjectxController.getSQL);
router.get('/:id', subjectxController.getById);
router.post('/', subjectxController.add);
router.put('/:id', subjectxController.update);
router.delete('/:id', subjectxController.delete);


module.exports = router;