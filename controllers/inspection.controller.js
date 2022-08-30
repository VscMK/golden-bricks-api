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

exports.create = (req, res) => {
    if (!req.body.apiary_id || !req.body.colony_id || !req.body.number_of_boxes) {
        res.status(400).send({
            message: "Please enter Apiary ID, Colony ID and Number of Boxes"
        });
        return;
    }

    const newInspection = {
        apiary_id: req.body.apiary_id,
        colony_id: req.body.colony_id,
        number_of_boxes: req.body.number_of_boxes,
        number_occupied_combs: req.body.number_occupied_combs,
        number_brood_combs: req.body.number_brood_combs,
        queen_status: req.body.queen_status,
        queen_loss_signs: req.body.queen_loss_signs,
        eggs: req.body.eggs,
        larvae: req.body.larvae,
        bee_pupae: req.body.bee_pupae,
        adult_queen: req.body.adult_queen,
        cells: req.body.cells,
        queen_replacement: req.body.queen_replacement,
        queen_status_change_reason: req.body.queen_status_change_reason,
        swarming_tendency: req.body.swarming_tendency,
        varoa: req.body.varoa,
        natural_varoa: req.body.natural_varoa,
        colony_loss: req.body.colony_loss == null ? "NO" : req.body.colony_loss,
        pollen: req.body.pollen,
        honey: req.body.honey,
        hygiene: req.body.hygiene,
        bees_gentleness: req.body.bees_gentleness,
        food: req.body.food,
        food_type: req.body.food_type,
        food_ammount: req.body.food_ammount,
        health_condition: req.body.health_condition,
        attention_needed: req.body.attention_needed,
        attention_needed_time: req.body.attention_needed_time,
        total_weight: req.body.total_weight,
        comment: req.body.comment,
        createdAt: new Date(),
        updatedAt: new Date(),
    };

    const inspection = Inspection.create(newInspection)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).json({ Message: err.message });
        });
};

exports.update = (req, res) => {
    const inspection_id = req.params.id;
    Inspection.update({
            number_of_boxes: req.body.number_of_boxes,
            number_occupied_combs: req.body.number_occupied_combs,
            number_brood_combs: req.body.number_brood_combs,
            queen_status: req.body.queen_status,
            queen_loss_signs: req.body.queen_loss_signs,
            eggs: req.body.eggs,
            larvae: req.body.larvae,
            bee_pupae: req.body.bee_pupae,
            adult_queen: req.body.adult_queen,
            cells: req.body.cells,
            queen_replacement: req.body.queen_replacement,
            queen_status_change_reason: req.body.queen_status_change_reason,
            swarming_tendency: req.body.swarming_tendency,
            varoa: req.body.varoa,
            natural_varoa: req.body.natural_varoa,
            colony_loss: req.body.colony_loss == null ? "NO" : req.body.colony_loss,
            pollen: req.body.pollen,
            honey: req.body.honey,
            hygiene: req.body.hygiene,
            bees_gentleness: req.body.bees_gentleness,
            food: req.body.food,
            food_type: req.body.food_type,
            food_ammount: req.body.food_ammount,
            health_condition: req.body.health_condition,
            attention_needed: req.body.attention_needed,
            attention_needed_time: req.body.attention_needed_time,
            total_weight: req.body.total_weight,
            comment: req.body.comment,
            updatedAt: new Date(),
        }, {
            where: { inspection_id: inspection_id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Inspection updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Inspection with ID = ${inspection_id}. Inspection not found.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({ Message: err.message });
        });
};

exports.delete = async(req, res) => {
    const inspection_id = req.params.id;
    Inspection.destroy({
            where: { inspection_id: inspection_id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Inspection successfully deleted."
                });
            } else {
                res.send({
                    message: `Cannot delete Inspection with ID = ${inspection_id}. Inspection not found.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({ Message: err.message });
        });
};