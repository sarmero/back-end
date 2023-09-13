const project = require('../models').users_model;

module.exports = {
    list(req, res) {
        return project
            .findAll({ })
            .then((projects) => res.status(200).send(projects))
            .catch((error) => {res.status(400).send(error);});
    },
};