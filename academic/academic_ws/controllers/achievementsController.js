const achievements = require('../models').achievements_model;
const type_event = require('../models').type_event_model;
const event = require('../models').event_model;
const db = require('../models');

module.exports = {
    getById(req, res) {
        console.log(req.params.id);
        return achievements
            .findByPk(req.params.id)
            .then((project) => {
                console.log(project);
                if (!project) {
                    return res.status(400).send({
                        message: 'achievements Not Found',
                    });
                }
                return res.status(200).send(project);
            }).catch((error) =>
                res.status(400).send(error));
    },

    userId(req, res) {
        console.log(req.params.usr);
        return achievements
            .findAll({
                attributes: [],
                include: [
                    {
                        model: event,
                        attributes: ['id','event'],
                    }
                ],
                where: {
                    user_id: req.params.usr
                }
            })
            .then((project) => res.status(200).send(project))
            .catch((error) => { res.status(400).send(error); });
    },

    add(req, res) {
        console.log(req);
        return achievements.create({
            user_id: req.body.user_id,
            event_id: req.body.event_id
        })
            .then((project) => res.status(201).send(project))
            .catch((error) => res.status(500).send(error));
    },

    update(req, res) {

        return achievements
            .findByPk(req.params.id).then(project => {
                if (!project) {
                    return res.status(404).send({
                        message: 'achievements Not Found',
                    });
                }
                return project
                    .update({
                        user_id: req.body.user_id || project.user_id,
                        event_id: req.body.event_id || project.event_id
                    })
                    .then(() => res.status(200).send(project))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return achievements
            .findByPk(req.params.id)
            .then(project => {
                if (!project) {
                    return res.status(400).send({
                        message: 'achievements Not Found',
                    });
                }
                return project
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            }).catch((error) => res.status(400).send(error));
    },

    getSQL(req, res) {
        return db.sequelize.query("SELECT * FROM achievements")
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