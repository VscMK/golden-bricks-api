const Users = require("../models/user");
// const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    Users.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error retrieving users."
            });
        });
};