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