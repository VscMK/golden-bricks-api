const Colony = require("../models/colony");
// const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    Colony.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({ Message: err.message || "Error retrieving colonies." });
        });
};

exports.create = (req, res) => {
    if (!req.body.apiaryId || !req.body.gondolaId) {
        res.status(400).send({
            message: "Please enter Apiary ID and Gondola ID"
        });
        return;
    }

    const newColony = {
        apiary_id: req.body.apiaryId,
        gondola_id: req.body.gondolaId,
        // seguence generator for code? AND change column name
        qr: 1,
        no_boxes: req.body.noBoxes,
        queen_id: req.body.queenId,
        queen_alarm: req.body.queenAlarm,
        createdAt: new Date(),
        updatedAt: new Date(),
    };

    Colony.create(newColony)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).json({ Message: err.message });
        });
};

exports.update = (req, res) => {
    const colony_id = req.params.id;
    Colony.update({
            no_boxes: req.body.noBoxes,
            queen_YN: req.body.queenYN,
            queen_alarm_YN: req.body.queenAlarmYN,
            updatedAt: new Date(),
        }, {
            where: { colony_id: colony_id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Colony updated successfully."
                });
            } else {
                res.send({
                    message: err.message || `Cannot update Colony with ID = ${colony_id}. Colony not found.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({ Message: err.message });
        });
};


exports.delete = async(req, res) => {
    const colony_id = req.params.id;
    Colony.destroy({
            where: { colony_id: colony_id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Colony successfully deleted."
                });
            } else {
                res.send({
                    message: `Cannot delete Colony with ID = ${colony_id}. Colony not found.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({ Message: err.message });
        });
};