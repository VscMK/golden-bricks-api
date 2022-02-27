const Gondola = require("../models/gondola");
// const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    Gondola.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error retrieving gondolas."
            });
        });
};