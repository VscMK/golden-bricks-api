const express = require('express');
const router = express.Router();
const db = require('../config/database');
const User = require('../models/user');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// Get users list
router.get('/', (req, res) =>
    User.findAll()
    .then(users => res.render('users', {
        users
    }))
    .catch(err => res.render('error', { error: err })));

module.exports = router;