var express = require('express');
var router = express.Router();

const adminnxController = require('../controllers').adminnController;

router.get('/sql', adminnxController.getSQL);
router.get('/:id', adminnxController.getById);
router.post('/', adminnxController.add);
router.put('/:id', adminnxController.update);
router.delete('/:id', adminnxController.delete);


module.exports = router;