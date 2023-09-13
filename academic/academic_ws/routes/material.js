var express = require('express');
var router = express.Router();

const materialxController = require('../controllers').materialController;

router.get('/sql', materialxController.getSQL);
router.get('/:id', materialxController.getById);
router.post('/', materialxController.add);
router.put('/:id', materialxController.update);
router.delete('/:id', materialxController.delete);


module.exports = router;