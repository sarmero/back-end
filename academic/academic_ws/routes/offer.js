var express = require('express');
var router = express.Router();

const offerxController = require('../controllers').offerController;

router.get('/subject', offerxController.subjectOffer);

router.get('/list', offerxController.listFull);
router.get('/sql', offerxController.getSQL);
router.get('/:id', offerxController.getById);
router.post('/', offerxController.add);
router.put('/:id', offerxController.update);
router.delete('/:id', offerxController.delete);

module.exports = router;