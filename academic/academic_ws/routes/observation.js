var express = require('express');
var router = express.Router();

const observationxController = require('../controllers').observationController;

router.get('/sql', observationxController.getSQL);
router.get('/:id', observationxController.getById);
router.post('/', observationxController.add);
router.put('/:id', observationxController.update);
router.delete('/:id', observationxController.delete);


module.exports = router;