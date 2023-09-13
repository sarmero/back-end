var express = require('express');
var router = express.Router();

const day_weekxController = require('../controllers').day_weekController;

router.get('/sql', day_weekxController.getSQL);
router.get('/:id', day_weekxController.getById);
router.post('/', day_weekxController.add);
router.put('/:id', day_weekxController.update);
router.delete('/:id', day_weekxController.delete);


module.exports = router;