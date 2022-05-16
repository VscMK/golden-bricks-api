const Queen = require("../models/queen");
const db = require('../config/config');
const bcrypt = require('bcrypt');
const { hash } = require("bcrypt");
const { jwtTokens } = require('../utils/jwt-helpers.js');


exports.findAll = (req, res, next) => {
    Queen.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error retrieving queens."
            });
        });
};

exports.create = (req, res) => {
    if (!req.body.apiary_id || !req.body.gondola_id || !req.body.colony_id || !req.body.color_plate || !req.body.queen_number) {
        res.status(400).send({
            message: "Please enter Apiary ID, Gondola ID, Colony ID, Color Plate and Queen Number"
        });
        return;
    }

    const newQueen = {
        apiary_id: req.body.apiary_id,
        gondola_id: req.body.gondola_id,
        colony_id: req.body.colony_id,
        color_plate: req.body.color_plate,
        number_on_plate: req.body.number_on_plate,
        queen_number: req.body.queen_number,
        clipped: req.body.clipped,
        mating_status: req.body.mating_status,
        marked: req.body.marked,
        createdAt: new Date(),
        updatedAt: new Date(),
    };

    const queen = Queen.create(newQueen)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).json({ Message: err.message });
        });
};

exports.update = (req, res) => {
    const queen_id = req.params.id;
    Queen.update({
            gondola_id: req.body.gondola_id,
            colony_id: req.body.colony_id,
            color_plate: req.body.color_plate,
            number_on_plate: req.body.number_on_plate,
            queen_number: req.body.queen_number,
            clipped: req.body.clipped,
            mating_status: req.body.mating_status,
            marked: req.body.marked,
            updatedAt: new Date(),
        }, {
            where: { queen_id: queen_id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Queen updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Queen with ID = ${queen_id}. Queen not found.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({ Message: err.message });
        });
};

exports.delete = async(req, res) => {
    const queen_id = req.params.id;
    Queen.destroy({
            where: { queen_id: queen_id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Queen successfully deleted."
                });
            } else {
                res.send({
                    message: `Cannot delete Queen with ID = ${queen_id}. Queen not found.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({ Message: err.message });
        });
};