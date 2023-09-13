var express = require('express');
var router = express.Router();

const state_offerxController = require('../controllers').state_offerController;

router.get('/sql', state_offerxController.getSQL);
router.get('/:id', state_offerxController.getById);
router.post('/', state_offerxController.add);
router.put('/:id', state_offerxController.update);
router.delete('/:id', state_offerxController.delete);


module.exports = router;