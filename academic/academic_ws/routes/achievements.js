var express = require('express');
var router = express.Router();

const achievementsxController = require('../controllers').achievementsController;


router.get('/sql', achievementsxController.getSQL);
router.get('/:usr', achievementsxController.userId);
router.get('/:id', achievementsxController.getById);
router.post('/', achievementsxController.add);
router.put('/:id', achievementsxController.update);
router.delete('/:id', achievementsxController.delete);


module.exports = router;