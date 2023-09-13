var express = require('express');
var router = express.Router();

const publication_commentxController = require('../controllers').publication_commentController;

router.get('/sql', publication_commentxController.getSQL);
router.get('/list', publication_commentxController.listFull);
router.get('/:id', publication_commentxController.getById);
router.post('/', publication_commentxController.add);
router.put('/:id', publication_commentxController.update);
router.delete('/:id', publication_commentxController.delete);


module.exports = router;