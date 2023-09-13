var express = require('express');
var router = express.Router();

const programmingxController = require('../controllers').programmingController;

router.get('/sql', programmingxController.getSQL);
router.get('/:id', programmingxController.getById);
router.post('/', programmingxController.add);
router.put('/:id', programmingxController.update);
router.delete('/:id', programmingxController.delete);


module.exports = router;