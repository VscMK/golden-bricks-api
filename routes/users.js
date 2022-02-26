const express = require('express')
const router = express.Router();
const db = require('../config/config');
const User = require('../models/user');

router.get('/', (req, res) =>
    User.findAll()
    .then(users => {
        console.log(users);
        res.sendStatus(200);

    })
    .catch(err => console.log(err))
);

module.exports = router;