const Inspection = require("../models/inspection");
const db = require('../config/config');
const bcrypt = require('bcrypt');
const { hash } = require("bcrypt");
const { jwtTokens } = require('../utils/jwt-helpers.js');


exports.findAll = (req, res) => {
    Inspection.findAll({
            include: [{ all: true, nested: true }]
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).json({ Message: err.message });
        });
};