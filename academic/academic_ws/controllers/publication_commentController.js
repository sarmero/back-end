const publication_comment = require('../models').publication_comment_model;
const db = require('../models');

module.exports = {
    listFull(req, res) {
        return publication_comment
            .findAll({
                attributes: ['id', 'comment','response'],
                include: [
                    {
                        attributes: ['first_name'],
                        model: users
                    },
                    {
                        model: publications,
                        where: {
                            id: req.body.id
                        }
                    }
                ],
                where: {
                    department_id: req.body.department
                }
            })
            .then((project) => res.status(200).send(project))
            .catch((error) => { res.status(400).send(error); });
    },

    getById(req, res) {
        console.log(req.params.id);
        return publication_comment
            .findByPk(req.params.id)
            .then((project) => {
                console.log(project);
                if (!project) {
                    return res.status(400).send({
                        message: 'publication_comment Not Found',
                    });
                }
                return res.status(200).send(project);
            }).catch((error) =>
                res.status(400).send(error));
    },

    add(req, res) {
        console.log(req);
        return publication_comment.create({
            publication_id: req.body.publication_id,
            user_id: req.body.user_id,
            comment: req.body.comment,
            date: req.body.date,
            time: req.body.time,
            response: req.body.response
        })
            .then((project) => res.status(201).send(project))
            .catch((error) => res.status(500).send(error));
    },

    update(req, res) {

        return publication_comment
            .findByPk(req.params.id).then(project => {
                if (!project) {
                    return res.status(404).send({
                        message: 'publication_comment Not Found',
                    });
                }
                return project
                    .update({
                        publication_id: req.body.publication_id || project.publication_id,
                        user_id: req.body.user_id || project.user_id,
                        comment: req.body.comment || project.comment,
                        date: req.body.date || project.date,
                        time: req.body.time || project.time,
                        response: req.body.response || project.response
                    })
                    .then(() => res.status(200).send(project))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return publication_comment
            .findByPk(req.params.id)
            .then(project => {
                if (!project) {
                    return res.status(400).send({
                        message: 'publication_comment Not Found',
                    });
                }
                return project
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            }).catch((error) => res.status(400).send(error));
    },

    getSQL(req, res) {
        return db.sequelize.query("SELECT * FROM publication_comment")
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