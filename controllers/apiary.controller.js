const Apiary = require("../models/apiary");
const Colony = require("../models/colony");
const Gondola = require("../models/gondola");
const Team = require("../models/team");
// const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    Apiary.findAll({
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
    if (!req.body.name || !req.body.locationName) {
        res.status(400).send({
            message: "Please enter Apiary name and location"
        });
        return;
    }

    const newApiary = {
        name: req.body.name,
        // seguence generator for code? AND change column name
        qr: 1,
        location_name: req.body.locationName,
        longitude: "Longitude",
        no_colonies: req.body.noColonies,
        fence: req.body.fence,
        electricity: req.body.electricity,
        createdAt: new Date(),
        updatedAt: new Date(),
    };

    const apiary = Apiary.create(newApiary)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).json({ Message: err.message });
        });

    // const newTeam = {
    //     manager_id: req.body.userId,
    //     name: "New Team",
    //     apiary_id: apiary.apiary_id
    // }

    // Team.create(newTeam);
};

exports.update = (req, res) => {
    const apiary_id = req.params.id;
    Apiary.update({
            name: req.body.name,
            // seguence generator for code? AND change column name
            qr: 1,
            location_name: req.body.locationName,
            longitude: "Longitude",
            no_colonies: req.body.noColonies,
            fence: req.body.fence,
            electricity: req.body.electricity,
            updatedAt: new Date(),
        }, {
            where: { apiary_id: apiary_id },
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Apiary updated successfully."
                });
            } else {
                res.send({
                    message: err.message || `Cannot update Apiary with ID = ${apiary_id}. Apiary not found.`
                });
            }
        })
        .catch(err => {
            res.status(500).json({ Message: err.message });
        });
};


exports.deleteApiary = async(req, res) => {
    const apiary_id = req.params.id;
    Apiary.destroy({
            where: { apiary_id: apiary_id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Apiary successfully deleted."
                });
            } else {
                res.send({
                    message: `Cannot delete Apiary with ID = ${apiary_id}. Apiary not found.`
                });
            }
        })
        .catch(err => {
            res.status(500).json({ Message: err.message });
        });
};