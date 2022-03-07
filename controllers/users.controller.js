const User = require("../models/user");
// const Op = db.Sequelize.Op;
const db = require('../config/config');
const bcrypt = require('bcrypt');
const { hash } = require("bcrypt");
const { jwtTokens } = require('../utils/jwt-helpers.js');


exports.findAll = (req, res, next) => {
    try {
        User.findAll()
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Error retrieving users."
                });
            });
    } catch (error) {
        res.send(500).json({ error: error.message });
    }
};

exports.register = async(req, res) => {
    if (!req.body.first_name || !req.body.last_name || !req.body.email || !req.body.password) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        hashed_password: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
        role_id: 1,
    };

    User.create(newUser)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            const errObj = {};
            err.errors.map(er => {
                errObj[er.path] = er.message;
            })
            res.status(500).json({ errObj });
        });
};

exports.login = async(req, res) => {
    try {
        console.log(req.cookies, req.get('origin'));
        const { email, password } = req.body;
        const users = await User.findAll({
            where: {
                email: email
            }
        });

        if (users.length === 0) return res.status(401).json({ error: "Email is incorrect" });
        //PASSWORD CHECK
        const validPassword = await bcrypt.compare(password, users[0].hashed_password);
        if (!validPassword) return res.status(401).json({ error: "Incorrect password" });
        //JWT
        let tokens = jwtTokens(users[0]); //Gets access and refresh tokens
        res.json(tokens);
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
};

exports.deleteUser = async(req, res) => {
    try {
        const email = req.body.email;
        await User.destroy({
            where: {
                email: email
            }
        });
        res.status(200).json({ Message: "Successfully deleted user." })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};