var express = require('express');
var router = express.Router();

const publicationsxController = require('../controllers').publicationsController;

router.get('/sql', publicationsxController.getSQL);
router.get('/:id', publicationsxController.listFull);
router.get('/comment', publicationsxController.comment);
//router.get('/:id', publicationsxController.getById);

router.post('/', publicationsxController.add);
router.put('/:id', publicationsxController.update);
router.delete('/:id', publicationsxController.delete);


module.exports = router;