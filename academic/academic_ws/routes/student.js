var express = require('express');
var router = express.Router();

const studentxController = require('../controllers').studentController;

router.get('/search', studentxController.search);
router.get('/:usr', studentxController.userId);
router.get('/code', studentxController.search_code);
router.get('/sql', studentxController.getSQL);
router.get('/:id', studentxController.getById);

router.post('/', studentxController.add);
router.put('/:id', studentxController.update);
router.delete('/:id', studentxController.delete);


module.exports = router;