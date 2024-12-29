const express = require('express');
const router = express.Router();
const {registAccomo} = require('../controllers/accomo.controller');

router.post('/register', registAccomo);

module.exports = router; 