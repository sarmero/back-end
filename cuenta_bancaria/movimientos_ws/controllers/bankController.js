const project = require('../models').project_model;

module.exports = {
    list (req, res) {
      return project
        .findAll({})
        .then(project => res.status(200).send(project))
        .catch(error => {
          res.status(400).send(error);
        });
  },
};
