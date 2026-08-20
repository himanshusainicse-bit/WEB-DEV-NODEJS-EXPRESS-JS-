const express = require('express');
const router = express.Router();
const tourController = require('../controller/tourcontroller');

router.get('/tours', tourController.getAllTours);

module.exports = router;