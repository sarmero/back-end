var express = require('express');
var router = express.Router();

const plan_studyxController = require('../controllers').plan_studyController;

router.get('/unscheduled', plan_studyxController.offerUnscheduled);
router.get('/sql', plan_studyxController.getSQL);
router.get('/:id', plan_studyxController.getById);
router.post('/', plan_studyxController.add);
router.put('/:id', plan_studyxController.update);
router.delete('/:id', plan_studyxController.delete);


module.exports = router;