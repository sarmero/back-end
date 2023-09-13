const department_messages = require('../models').department_messages_model;
const db = require('../models');

module.exports = {
    getById(req, res) {
        console.log(req.params.id);
        return department_messages
            .findByPk(req.params.id)
            .then((project) => {
                console.log(project);
                if (!project) {
                    return res.status(400).send({
                        message: 'department_messages Not Found',
                    });
                }
                return res.status(200).send(project);
            }).catch((error) =>
                res.status(400).send(error));
    },

    add(req, res) {
        console.log(req);
        return department_messages.create({
            message: req.body.message,
            type: req.body.type,
            date: req.body.date,
            time: req.body.time,
            chat_id: req.body.chat_id
        })
            .then((project) => res.status(201).send(project))
            .catch((error) => res.status(500).send(error));
    },

    update(req, res) {
    
        return department_messages
            .findByPk(req.params.id).then(project => {
                if (!project) {
                    return res.status(404).send({
                        message: 'department_messages Not Found',
                    });
                }
                return project
                    .update({
                        message: req.body.message || project.message,
                        type: req.body.type || project.type,
                        date: req.body.date || project.date,
                        time: req.body.time || project.time,
                        chat_id: req.body.chat_id || project.chat_id
                    })
                    .then(() => res.status(200).send(project))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return department_messages
            .findByPk(req.params.id)
            .then(project => {
                if (!project) {
                    return res.status(400).send({
                        message: 'department_messages Not Found',
                    });
                }
                return project
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            }).catch((error) => res.status(400).send(error));
    },

    getSQL(req, res) {
        return db.sequelize.query("SELECT * FROM department_messages")
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