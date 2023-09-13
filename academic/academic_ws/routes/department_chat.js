var express = require('express');
var router = express.Router();

const department_chatxController = require('../controllers').department_chatController;


router.get('/messages', department_chatxController.messages);
router.get('/sql', department_chatxController.getSQL);
router.get('/:id', department_chatxController.getById);
router.post('/', department_chatxController.add);
router.put('/:id', department_chatxController.update);
router.delete('/:id', department_chatxController.delete);


module.exports = router;