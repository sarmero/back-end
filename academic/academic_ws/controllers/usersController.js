const users = require('../models').users_model;
const rolle = require('../models').rolle_model;
const db = require('../models');

module.exports = {
    getById(req, res) {
        console.log(req.params.id);
        return users
            .findByPk(req.params.id)
            .then((project) => {
                console.log(project);
                if (!project) {
                    return res.status(400).send({
                        message: 'users Not Found',
                    });
                }
                return res.status(200).send(project);
            }).catch((error) =>
                res.status(400).send(error));
    },

    login(req, res) {
        console.log("cuerpo");
        console.log(req.body.usrname);
        console.log(req.body.password);
        return users
            .findAll({
                include: [
                    {
                        model: rolle,
                        attributes: ['type_rolle']
                    }
                ],
                where: {
                    usrname: req.body.usrname,
                    password: req.body.password
                }
            })
            .then((project) => res.status(200).send(project))
            .catch((error) => { res.status(400).send(error); });
    },

    add(req, res) {
        console.log(req);
        return users.create({
            usrname: req.body.usrname,
            password: req.body.password,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            gender: req.body.gender,
            rolle_id: req.body.rolle_id,
            phone: req.body.phone,
            email: req.body.email
        })
            .then((project) => res.status(201).send(project))
            .catch((error) => res.status(500).send(error));
    },

    update(req, res) {

        return users
            .findByPk(req.params.id).then(project => {
                if (!project) {
                    return res.status(404).send({
                        message: 'users Not Found',
                    });
                }
                return project
                    .update({
                        usrname: req.body.usrname || project.usrname,
                        password: req.body.password || project.password,
                        first_name: req.body.first_name || project.first_name,
                        last_name: req.body.last_name || project.last_name,
                        gender: req.body.gender || project.gender,
                        rolle_id: req.body.rolle_id || project.rolle_id,
                        phone: req.body.phone || project.phone,
                        email: req.body.email || project.email
                    })
                    .then(() => res.status(200).send(project))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return users
            .findByPk(req.params.id)
            .then(project => {
                if (!project) {
                    return res.status(400).send({
                        message: 'users Not Found',
                    });
                }
                return project
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            }).catch((error) => res.status(400).send(error));
    },

    getSQL(req, res) {
        return db.sequelize.query("SELECT * FROM users")
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