const express = require('express')
const router = express.Router();
const db = require('../config/config');
const User = require('../controllers/users.controller')

router.get('/', User.findAll);

module.exports = router;