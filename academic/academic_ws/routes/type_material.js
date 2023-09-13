var express = require('express');
var router = express.Router();

const type_materialxController = require('../controllers').type_materialController;

router.get('/sql', type_materialxController.getSQL);
router.get('/:id', type_materialxController.getById);
router.post('/', type_materialxController.add);
router.put('/:id', type_materialxController.update);
router.delete('/:id', type_materialxController.delete);


module.exports = router;