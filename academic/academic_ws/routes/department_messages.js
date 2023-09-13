var express = require('express');
var router = express.Router();

const department_messagesxController = require('../controllers').department_messagesController;

router.get('/sql', department_messagesxController.getSQL);
router.get('/:id', department_messagesxController.getById);
router.post('/', department_messagesxController.add);
router.put('/:id', department_messagesxController.update);
router.delete('/:id', department_messagesxController.delete);


module.exports = router;