const express = require('express');
const controller = require('./../controllers');

const router = express.Router();

router.get('/deleteAll', controller.deleteAll);
router.get('/update/:id', controller.updateOne);
router.get('/getAll', controller.getAll);
router.get('/getAllDone', controller.getAllDone);
router.post('/create', controller.createOne);


module.exports = router;
