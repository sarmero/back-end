const project = require('../models').project_model;
const activity = require('../models').activity_model;
const employ = require('../models').employ_model;
const { where } = require('sequelize');
const db = require('../models');



module.exports = {

    list(req, res) {
        return project
            .findAll({})
            .then((pj) => res.status(200).send(pj))
            .catch((error) => { res.status(500).send(error); });
    },

    listFull(req, res) {
        return project
            .findAll({
                attributes: ['id', 'title', 'description', 'state'],
                include: [
                    {
                        attributes: ['id', 'description'],
                        model: activity
                    },
                    {
                        attributes: ['name', 'lastname', 'email'],
                        model: employ
                    }
                ]
            })
            .then((project) => res.status(200).send(project))
            .catch((error) => { res.status(500).send(error); });
    },

    listEnableFull(req, res) {
        return project
            .findAll({
                attributes: ['id', 'title'],
                include: [{
                    attributes: ['id', 'description'],
                    model: activity
                },
                {
                    model: employ
                }
                ],
                where: {
                    state: true
                },
                order: [
                    ['title', 'DESC']
                ]
            })
            .then((project) => res.status(200).send(project))
            .catch((error) => { res.status(400).send(error); });
    },

    getById(req, res) {

        console.log(req.params.id);
        return project
            .findByPk(req.params.id)
            .then((pj) => {
                console.log(pj);
                if (!pj) {
                    return res.status(400).send({
                        message: 'project Not Found',
                    });
                }
                return res.status(200).send(pj);
            })
            .catch((error) =>
                res.status(500).send(error));
    },


    getFullById(req, res) {

        console.log(req.params.id);
        return project
            .findOne(
                {
                    where: {
                        id: req.params.id
                    },
                    include: [{
                        attributes: ['id', 'description'],
                        model: activity
                    }]
                }
            )
            .then((pj) => {
                console.log(pj);
                if (!pj) {
                    return res.status(400).send({
                        message: 'project Not Found',
                    });
                }
                return res.status(200).send(pj);
            })
            .catch((error) =>
                res.status(500).send(error));
    },

    add(req, res) {

        console.log(req.body);

        return project
            .create({
                title: req.body.title,
                description: req.body.description,
                state: req.body.state,
                id_per_res: req.body.id_per_res
            })
            .then((pj) => res.status(201).send(pj))
            .catch((error) => res.status(500).send(error));
    },

    update(req, res) {
        return project
            .findByPk(req.params.id)
            .then(pj => {
                if (!pj) {
                    return res.status(400).send({
                        message: 'project Not Found',
                    });
                }
                return pj
                    .update({
                        title: req.body.title || pj.title,
                        description: req.body.description || pj.description,
                        state: req.body.state == undefined ? pj.state : req.body.state,
                        id_per_res: req.body.id_per_res || pj.id_per_res
                    })
                    .then((pju) => res.status(200).send(pju))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return project
            .findByPk(req.params.id)
            .then(pj => {
                if (!pj) {
                    return res.status(400).send({
                        message: 'project Not Found',
                    });
                }
                return pj
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(500).send(error));
            })
            .catch((error) => res.status(500).send(error));
    },

    getSQL(req, res) {

        return db.sequelize.query("SELECT * FROM project")
            .then((result) => {
                console.log(result);
                if (!result) {
                    return res.status(404).send({
                        message: 'result Not Found',
                    });
                }
                return res.status(200).send(result[0]);
            })
            .catch((error) =>
                res.status(500).send(error));
    },




};
