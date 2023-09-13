var express = require('express');
var router = express.Router();

const statesxController = require('../controllers').statesController;

router.get('/sql', statesxController.getSQL);
router.get('/:id', statesxController.getById);
router.post('/', statesxController.add);
router.put('/:id', statesxController.update);
router.delete('/:id', statesxController.delete);


module.exports = router;