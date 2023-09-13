const publications = require('../models').publications_model;
const publication_comment = require('../models').publication_comment_model;
const users = require('../models').users_model;
const db = require('../models');

module.exports = {
    
    listFull(req, res) {
        console.log("parametro");
        console.log(req.params.id);
        return publications
            .findAll({
                where:{
                    department_id: req.params.id
                }
            })
            .then((project) => res.status(200).send(project))
            .catch((error) => { res.status(400).send(error); });
    },

    comment(req, res) {
        return publications
            .findAll({
                attributes: ['id'],
                include: [
                    {
                        attributes: ['id', 'comment', 'response'],
                        model: publication_comment,
                        include: [
                            {
                                attributes: ['first_name'],
                                model: users
                            }
                        ],
                        order: [
                            ['date', 'ASC'],
                            ['time', 'ASC']
                        ]
                    }
                ],
                where: {
                    id: req.body.id
                }
            })
            .then((project) => res.status(200).send(project))
            .catch((error) => { res.status(400).send(error); });
    },

    getById(req, res) {
        console.log(req.params.id);
        return publications
            .findByPk(req.params.id)
            .then((project) => {
                console.log(project);
                if (!project) {
                    return res.status(400).send({
                        message: 'publications Not Found',
                    });
                }
                return res.status(200).send(project);
            }).catch((error) =>
                res.status(400).send(error));
    },

    add(req, res) {
        console.log(req);
        return publications.create({
            department_id: req.body.department_id,
            publication: req.body.publication,
            date: req.body.date
        })
            .then((project) => res.status(201).send(project))
            .catch((error) => res.status(500).send(error));
    },

    update(req, res) {

        return publications
            .findByPk(req.params.id).then(project => {
                if (!project) {
                    return res.status(404).send({
                        message: 'publications Not Found',
                    });
                }
                return project
                    .update({
                        department_id: req.body.department_id || project.department_id,
                        publication: req.body.publication || project.publication,
                        date: req.body.date || project.date
                    })
                    .then(() => res.status(200).send(project))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return publications
            .findByPk(req.params.id)
            .then(project => {
                if (!project) {
                    return res.status(400).send({
                        message: 'publications Not Found',
                    });
                }
                return project
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            }).catch((error) => res.status(400).send(error));
    },

    getSQL(req, res) {
        return db.sequelize.query("SELECT * FROM publications")
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