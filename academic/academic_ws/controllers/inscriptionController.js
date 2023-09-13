const inscription = require('../models').inscription_model;
const offer = require('../models').offer_model;
const plan_study = require('../models').plan_study_model;
const users = require('../models').users_model;
const student = require('../models').student_model;
const db = require('../models');

module.exports = {
    students_enrolled(req, res) {
        return inscription
            .findAll({
                attributes: ['id'],
                include: [
                    {
                        model: offer,
                        attributes: ['plan_study_id'],
                        include: [
                            {
                                model: plan_study,
                                attributes: ['id'],
                                where: {
                                    curriculum_id: req.body.curriculum,
                                    semester_id: req.body.semester,
                                    subject_id: req.body.subject
                                }
                            }
                        ],
                        where: {
                            region_id: req.body.region,
                            calendar_id: req.body.calendar
                        }
                    },
                    {
                        attributes: ['student_id'],
                        model: student,
                        include: [{
                            attributes: ['usrname', 'first_name', 'last_name'],
                            model: users,
                            order: [
                                ['first_name', 'ASC']
                            ]
                        }
                        ]
                    }
                ]
            })
            .then((project) => res.status(200).send(project))
            .catch((error) => { res.status(400).send(error); });
    },
    getById(req, res) {
        console.log(req.params.id);
        return inscription
            .findByPk(req.params.id)
            .then((project) => {
                console.log(project);
                if (!project) {
                    return res.status(400).send({
                        message: 'inscription Not Found',
                    });
                }
                return res.status(200).send(project);
            }).catch((error) =>
                res.status(400).send(error));
    },

    add(req, res) {
        console.log(req);
        return inscription.create({
            student_id: req.body.student_id,
            offer_id: req.body.offer_id
        })
            .then((project) => res.status(201).send(project))
            .catch((error) => res.status(500).send(error));
    },

    update(req, res) {

        return inscription
            .findByPk(req.params.id).then(project => {
                if (!project) {
                    return res.status(404).send({
                        message: 'inscription Not Found',
                    });
                }
                return project
                    .update({
                        student_id: req.body.student_id || project.student_id,
                        offer_id: req.body.offer_id || project.offer_id
                    })
                    .then(() => res.status(200).send(project))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return inscription
            .findByPk(req.params.id)
            .then(project => {
                if (!project) {
                    return res.status(400).send({
                        message: 'inscription Not Found',
                    });
                }
                return project
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            }).catch((error) => res.status(400).send(error));
    },

    getSQL(req, res) {
        return db.sequelize.query("SELECT * FROM inscription")
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