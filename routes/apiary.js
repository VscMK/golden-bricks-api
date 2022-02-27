const express = require('express')
const router = express.Router();
const db = require('../config/config');
const Apiary = require('../controllers/apiary.controller')

router.get('/', Apiary.findAll);

module.exports = router;