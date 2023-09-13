var express = require('express');
var router = express.Router();

const curriculumxController = require('../controllers').curriculumController;

router.get('/pensum_program', curriculumxController.pensum_program);
router.get('/pensum', curriculumxController.pensum_department);
router.get('/sql', curriculumxController.getSQL);
router.get('/:id', curriculumxController.getById);
router.post('/', curriculumxController.add);
router.put('/:id', curriculumxController.update);
router.delete('/:id', curriculumxController.delete);


module.exports = router;