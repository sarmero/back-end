var express = require('express');
var router = express.Router();

const type_eventxController = require('../controllers').type_eventController;

router.get('/sql', type_eventxController.getSQL);
router.get('/:id', type_eventxController.getById);
router.post('/', type_eventxController.add);
router.put('/:id', type_eventxController.update);
router.delete('/:id', type_eventxController.delete);


module.exports = router;