var express = require('express');
var router = express.Router();

const regionxController = require('../controllers').regionController;

router.get('/region', regionxController.stateById);
router.get('/sql', regionxController.getSQL);
router.get('/:id', regionxController.getById);
router.post('/', regionxController.add);
router.put('/:id', regionxController.update);
router.delete('/:id', regionxController.delete);


module.exports = router;