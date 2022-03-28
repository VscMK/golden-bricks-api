const Gondola = require("../models/gondola");
// const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    Gondola.findAll({
            include: [{ all: true, nested: true }]
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({ Message: err.message });
        });
};

exports.create = (req, res) => {
    if (!req.body.apiaryId) {
        res.status(400).send({
            message: "Please enter Apiary ID."
        });
        return;
    }

    const newGondola = {
        apiary_id: req.body.apiaryId,
        // seguence generator for code? AND change column name
        qr: 1,
        no_colonies: req.body.noColonies,
        createdAt: new Date(),
        updatedAt: new Date(),
    };

    Gondola.create(newGondola)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).json({ Message: err.message });
        });
};

exports.update = (req, res) => {
    const gondola_id = req.params.id;
    Gondola.update({
            no_colonies: req.body.noColonies,
            updatedAt: new Date(),
        }, {
            where: { gondola_id: gondola_id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Gondola updated successfully."
                });
            } else {
                res.send({
                    message: err.message || `Cannot update Gondola with ID = ${gondola_id}. Gondola not found.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({ Message: err.message });
        });
};


exports.delete = async(req, res) => {
    const gondola_id = req.params.id;
    Gondola.destroy({
            where: { gondola_id: gondola_id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Gondola successfully deleted."
                });
            } else {
                res.send({
                    message: `Cannot delete Gondola with ID = ${gondola_id}. Gondola not found.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({ Message: err.message });
        });
};