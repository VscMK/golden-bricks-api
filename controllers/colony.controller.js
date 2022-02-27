const Colony = require("../models/colony");
// const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    Colony.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error retrieving colonies."
            });
        });
};