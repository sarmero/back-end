const department_chat = require('../models').department_chat_model;
const messages = require('../models').department_messages_model;
const db = require('../models');

module.exports = {
    messages(req, res) {
        return department_chat
            .findAll({
                attributes: ['id'],
                include: [
                    {
                        model: messages
                    }
                ],
                where: {
                    user_id: req.body.user,
                    department_id: req.body.department
                }
            })
            .then((project) => res.status(200).send(project))
            .catch((error) => { res.status(400).send(error); });
    },


    getById(req, res) {
        console.log(req.params.id);
        return department_chat
            .findByPk(req.params.id)
            .then((project) => {
                console.log(project);
                if (!project) {
                    return res.status(400).send({
                        message: 'department_chat Not Found',
                    });
                }
                return res.status(200).send(project);
            }).catch((error) =>
                res.status(400).send(error));
    },

    add(req, res) {
        console.log(req);
        return department_chat.create({
            user_id: req.body.user_id,
            department_id: req.body.department_id,
            date: req.body.date,
            time: req.body.time
        })
            .then((project) => res.status(201).send(project))
            .catch((error) => res.status(500).send(error));
    },

    update(req, res) {

        return department_chat
            .findByPk(req.params.id).then(project => {
                if (!project) {
                    return res.status(404).send({
                        message: 'department_chat Not Found',
                    });
                }
                return project
                    .update({
                        user_id: req.body.user_id || project.user_id,
                        department_id: req.body.department_id || project.department_id,
                        date: req.body.date || project.date,
                        time: req.body.time || project.time
                    })
                    .then(() => res.status(200).send(project))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return department_chat
            .findByPk(req.params.id)
            .then(project => {
                if (!project) {
                    return res.status(400).send({
                        message: 'department_chat Not Found',
                    });
                }
                return project
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            }).catch((error) => res.status(400).send(error));
    },

    getSQL(req, res) {
        return db.sequelize.query("SELECT * FROM department_chat")
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