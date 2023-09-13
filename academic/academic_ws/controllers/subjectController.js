const subject = require('../models').subject_model;
const plan_study = require('../models').plan_study_model;
const curriculum = require('../models').curriculum_model;
const db = require('../models');

module.exports = {

    getById(req, res) {
        console.log(req.params.id);
        return subject
            .findByPk(req.params.id)
            .then((project) => {
                console.log(project);
                if (!project) {
                    return res.status(400).send({
                        message: 'subject Not Found',
                    });
                }
                return res.status(200).send(project);
            }).catch((error) =>
                res.status(400).send(error));
    },

    departmentById(req, res) {
        return subject
            .findAll({
                attributes: ['id','subject','code'],
                where: {
                    department_id: req.body.department
                },
                order: [
                    ['subject', 'ASC'] 
                ]
            })
            .then((project) => res.status(200).send(project))
            .catch((error) => { res.status(400).send(error); });
    },

    program(req, res) {
        return subject
            .findAll({
                attributes: ['id', 'subject'],
                include: [
                    {
                        model: plan_study,
                        attributes: ['id'],
                        include: [
                            {
                                model: curriculum,
                                attributes: ['id'],
                                where: {
                                    id: req.body.curriculum,
                                    profession_id: req.body.profession
                                }
                            }
                        ],
                        where: {
                            semester_id: req.body.semester
                        }
                    }
                ],
                order: [
                    ['subject', 'ASC'] 
                ]
            })
            .then((project) => res.status(200).send(project))
            .catch((error) => { res.status(400).send(error); });
    },

    add(req, res) {
        console.log(req);
        return subject.create({
            subject: req.body.subject,
            department_id: req.body.department_id,
            code: req.body.code
        })
            .then((project) => res.status(201).send(project))
            .catch((error) => res.status(500).send(error));
    },

    update(req, res) {

        return subject
            .findByPk(req.params.id).then(project => {
                if (!project) {
                    return res.status(404).send({
                        message: 'subject Not Found',
                    });
                }
                return project
                    .update({
                        subject: req.body.subject || project.subject,
                        department_id: req.body.department_id || project.department_id,
                        code: req.body.code || project.code
                    })
                    .then(() => res.status(200).send(project))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return subject
            .findByPk(req.params.id)
            .then(project => {
                if (!project) {
                    return res.status(400).send({
                        message: 'subject Not Found',
                    });
                }
                return project
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            }).catch((error) => res.status(400).send(error));
    },

    getSQL(req, res) {
        return db.sequelize.query("SELECT * FROM subject")
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