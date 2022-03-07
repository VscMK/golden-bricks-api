const Apiary = require("../models/apiary");
// const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    Apiary.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error retrieving apiaries."
            });
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
        QR_code: 1,
        location_name: req.body.locationName,
        no_gondolas: req.body.noGondolas,
        fence_YN: req.body.fenceYN,
        electricity_YN: req.body.electricityYN,
        createdAt: new Date(),
        updatedAt: new Date(),
    };

    Apiary.create(newApiary)
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

exports.update = (req, res) => {
    const apiary_id = req.params.id;
    Apiary.update({
            name: req.body.name,
            // seguence generator for code? AND change column name
            QR_code: 1,
            location_name: req.body.locationName,
            no_gondolas: req.body.noGondolas,
            fence_YN: req.body.fenceYN,
            electricity_YN: req.body.electricityYN,
            updatedAt: new Date(),
        }, {
            where: { id: apiary_id }
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
            res.status(500).send({
                message: "Error updating Apiary with ID = " + apiary_id
            });
        });
};


exports.deleteApiary = async(req, res) => {
    const apiary_id = req.params.id;
    Apiary.destroy({
            where: { id: apiary_id }
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
            res.status(500).send({
                message: "Could not delete Apiary with ID = " + apiary_id
            });
        });
};