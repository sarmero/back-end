var express = require('express');
var router = express.Router();

const biographyxController = require('../controllers').biographyController;

router.get('/sql', biographyxController.getSQL);
router.get('/:usr', biographyxController.userId);
router.get('/:id', biographyxController.getById);
router.post('/', biographyxController.add);
router.put('/:id', biographyxController.update);
router.delete('/:id', biographyxController.delete);


module.exports = router;