const evaluation = require('../models').evaluation_model;
const db = require('../models');

module.exports = {
    getById(req, res) {
        console.log(req.params.id);
        return evaluation
            .findByPk(req.params.id)
            .then((project) => {
                console.log(project);
                if (!project) {
                    return res.status(400).send({
                        message: 'evaluation Not Found',
                    });
                }
                return res.status(200).send(project);
            }).catch((error) =>
                res.status(400).send(error));
    },

    add(req, res) {
        console.log(req);
        return evaluation.create({
            theme_id: req.body.theme_id,
            type_evaluation_id: req.body.type_evaluation_id,
            date: req.body.date,
            state: req.body.state
        })
            .then((project) => res.status(201).send(project))
            .catch((error) => res.status(500).send(error));
    },

    update(req, res) {
    
        return evaluation
            .findByPk(req.params.id).then(project => {
                if (!project) {
                    return res.status(404).send({
                        message: 'evaluation Not Found',
                    });
                }
                return project
                    .update({
                        theme_id: req.body.theme_id || project.theme_id,
                        type_evaluation_id: req.body.type_evaluation_id || project.type_evaluation_id,
                        date: req.body.date || project.date,
                        state: req.body.state || project.state
                    })
                    .then(() => res.status(200).send(project))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return evaluation
            .findByPk(req.params.id)
            .then(project => {
                if (!project) {
                    return res.status(400).send({
                        message: 'evaluation Not Found',
                    });
                }
                return project
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            }).catch((error) => res.status(400).send(error));
    },

    getSQL(req, res) {
        return db.sequelize.query("SELECT * FROM evaluation")
            .then((result) => {
                console.log(result); if (!result) {
                    return res.status(404).send({
                        message: 'result Not Found',
                    });
                } return res.status(200).send(result[0]);
            })
            .catch((error) => res.status(400).send(error));
    },
};