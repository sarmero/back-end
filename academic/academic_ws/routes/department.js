var express = require('express');
var router = express.Router();

const departmentxController = require('../controllers').departmentController;

router.get('/sql', departmentxController.getSQL);
router.get('/:id', departmentxController.getById);
router.post('/', departmentxController.add);
router.put('/:id', departmentxController.update);
router.delete('/:id', departmentxController.delete);


module.exports = router;