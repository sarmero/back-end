
const employ = require('../models').employ_model;


module.exports = {

    list(req, res) {
        return employ
            .findAll({})
            .then((emp) => res.status(200).send(emp))
            .catch((error) => { res.status(500).send(error); });
    },
};
