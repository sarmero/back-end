var express = require('express');
var router = express.Router();

const semesterxController = require('../controllers').semesterController;

router.get('/sql', semesterxController.getSQL);
router.get('/:id', semesterxController.getById);
router.post('/', semesterxController.add);
router.put('/:id', semesterxController.update);
router.delete('/:id', semesterxController.delete);


module.exports = router;