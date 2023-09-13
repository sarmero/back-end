var express = require('express');
var router = express.Router();

const publication_likexController = require('../controllers').publication_likeController;

router.get('/sql', publication_likexController.getSQL);
router.get('/:id', publication_likexController.getById);
router.post('/', publication_likexController.add);
router.put('/:id', publication_likexController.update);
router.delete('/:id', publication_likexController.delete);


module.exports = router;