const express = require('express')
const router = express.Router();
const db = require('../config/config');
const User = require('../controllers/users.controller')
const checkAuth = require("../utils/check.auth");


router.get('/', User.findAll);
router.post('/register', User.register);
router.post('/login', User.login);
router.delete('/delete', checkAuth, User.deleteUser);


module.exports = router;