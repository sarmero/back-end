var express = require('express');
var router = express.Router();

const eventxController = require('../controllers').eventController;

router.get('/sql', eventxController.getSQL);
router.get('/:id', eventxController.getById);
router.post('/', eventxController.add);
router.put('/:id', eventxController.update);
router.delete('/:id', eventxController.delete);


module.exports = router;