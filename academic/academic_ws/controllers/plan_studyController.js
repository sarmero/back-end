const plan_study = require('../models').plan_study_model;
const programming = require('../models').programming_model;
const offer = require('../models').offer_model;
const subject = require('../models').subject_model;
const db = require('../models');

module.exports = {

    offerUnscheduled(req, res) {
        return plan_study
            .findAll({
                attributes: ['id'],
                include: [
                    {
                        model: offer,
                        attributes: [],
                        required: false,
                        where: {
                            region_id: req.body.region
                        },
                        subQuery: false,
                        includeIgnoreAttributes: false,
                        include: [
                            {
                                model: programming,
                                attributes: [],
                                required: false
                            }
                        ]
                    },
                    {
                        model: subject,
                        attributes: ['id', 'subject']
                    }
                ],
                where: {
                    semester_id: req.body.semester,
                    curriculum_id: req.body.curriculum
                }

            })
            .then((project) => res.status(200).send(project))
            .catch((error) => { res.status(400).send(error); });
    },


    getById(req, res) {
        console.log(req.params.id);
        return plan_study
            .findByPk(req.params.id)
            .then((project) => {
                console.log(project);
                if (!project) {
                    return res.status(400).send({
                        message: 'plan_study Not Found',
                    });
                }
                return res.status(200).send(project);
            }).catch((error) =>
                res.status(400).send(error));
    },

    add(req, res) {
        console.log(req);
        return plan_study.create({
            subject_id: req.body.subject_id,
            semester_id: req.body.semester_id,
            curriculum_id: req.body.curriculum_id
        })
            .then((project) => res.status(201).send(project))
            .catch((error) => res.status(500).send(error));
    },

    update(req, res) {

        return plan_study
            .findByPk(req.params.id).then(project => {
                if (!project) {
                    return res.status(404).send({
                        message: 'plan_study Not Found',
                    });
                }
                return project
                    .update({
                        subject_id: req.body.subject_id || project.subject_id,
                        semester_id: req.body.semester_id || project.semester_id,
                        curriculum_id: req.body.curriculum_id || project.curriculum_id
                    })
                    .then(() => res.status(200).send(project))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return plan_study
            .findByPk(req.params.id)
            .then(project => {
                if (!project) {
                    return res.status(400).send({
                        message: 'plan_study Not Found',
                    });
                }
                return project
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            }).catch((error) => res.status(400).send(error));
    },

    getSQL(req, res) {
        return db.sequelize.query("SELECT * FROM plan_study")
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