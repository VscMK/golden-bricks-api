const express = require('express')
const router = express.Router();
const db = require('../config/config');
const Colony = require('../controllers/colony.controller');

router.get('/', Colony.findAll);

module.exports = router;