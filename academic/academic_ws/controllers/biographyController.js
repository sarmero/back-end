const biography = require('../models').biography_model;
const db = require('../models');

module.exports = {
    getById(req, res) {
        console.log(req.params.id);
        return biography
            .findByPk(req.params.id)
            .then((project) => {
                console.log(project);
                if (!project) {
                    return res.status(400).send({
                        message: 'biography Not Found',
                    });
                }
                return res.status(200).send(project);
            }).catch((error) =>
                res.status(400).send(error));
    },

    userId(req, res) {
        console.log("parametro");
        console.log(req.params.usr);
        return biography
            .findAll({
                where:{
                    user_id: req.params.usr
                }
            })
            .then((project) => res.status(200).send(project))
            .catch((error) => { res.status(400).send(error); });
    },


    add(req, res) {
        console.log(req);
        return biography.create({
            description: req.body.description,
            title_id: req.body.title_id,
            user_id: req.body.user_id
        })
            .then((project) => res.status(201).send(project))
            .catch((error) => res.status(500).send(error));
    },

    update(req, res) {
    
        return biography
            .findByPk(req.params.id).then(project => {
                if (!project) {
                    return res.status(404).send({
                        message: 'biography Not Found',
                    });
                }
                return project
                    .update({
                        description: req.body.description || project.description,
                        title_id: req.body.title_id || project.title_id,
                        user_id: req.body.user_id || project.user_id
                    })
                    .then(() => res.status(200).send(project))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return biography
            .findByPk(req.params.id)
            .then(project => {
                if (!project) {
                    return res.status(400).send({
                        message: 'biography Not Found',
                    });
                }
                return project
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            }).catch((error) => res.status(400).send(error));
    },

    getSQL(req, res) {
        return db.sequelize.query("SELECT * FROM biography")
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