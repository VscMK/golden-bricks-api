const express = require('express')
const router = express.Router();
const db = require('../config/config');
const Gondola = require('../controllers/gondola.controller');

router.get('/', Gondola.findAll);

module.exports = router;