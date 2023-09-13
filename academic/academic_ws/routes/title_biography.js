var express = require('express');
var router = express.Router();

const title_biographyxController = require('../controllers').title_biographyController;

router.get('/sql', title_biographyxController.getSQL);
router.get('/:id', title_biographyxController.getById);
router.post('/', title_biographyxController.add);
router.put('/:id', title_biographyxController.update);
router.delete('/:id', title_biographyxController.delete);


module.exports = router;