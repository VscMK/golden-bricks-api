const Colony = require("../models/colony");
const Gondola = require("../models/gondola");
// const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    Colony.findAll({
            include: [{ all: true, nested: true }]
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({ Message: err.message || "Error retrieving colonies." });
        });
};

exports.create = async(req, res) => {
    if (!req.body.apiaryId || !req.body.gondolaId) {
        res.status(400).send({
            message: "Please enter Apiary ID and Gondola ID"
        });
        return;
    }

    let noColonies = 0;
    let errMessage;
    // find the Gondola containing the Colonies and check if no_colonies exceeds 5
    const gondolaObj = await Gondola.findOne({
        where: {
            gondola_id: req.body.gondolaId,
        }
    }).then(gondolaObj => {
        gondolaObj != null ? noColonies = gondolaObj.no_colonies : { errMessage: "Gondola does not exist." };
    }).catch(err => {
        res.status(500).send({ Message: err.message || errMessage });
    });

    if (noColonies >= 5) {
        res.status(400).send({
            message: "Gondola can not have more than 5 Colonies."
        });
        return;
    }

    Gondola.update({
        no_colonies: ++noColonies,
        updatedAt: new Date(),
    }, {
        where: {
            gondola_id: req.body.gondolaId,
            apiary_id: req.body.apiaryId
        }
    })

    const newColony = {
        apiary_id: req.body.apiaryId,
        gondola_id: req.body.gondolaId,
        // seguence generator for code? AND change column name
        qr: 1,
        no_boxes: req.body.noBoxes,
        no_colonies: noColonies++,
        queen: req.body.queen,
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
            queen: req.body.queen,
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