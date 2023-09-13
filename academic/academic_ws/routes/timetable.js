var express = require('express');
var router = express.Router();

const timetablexController = require('../controllers').timetableController;

router.get('/sql', timetablexController.getSQL);
router.get('/list', timetablexController.listFull);
router.get('/full', timetablexController.calendarFull);
router.get('/:id', timetablexController.getById);
router.post('/', timetablexController.add);
router.put('/:id', timetablexController.update);
router.delete('/:id', timetablexController.delete);


module.exports = router;