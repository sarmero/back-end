const offer = require('../models').offer_model;
const plan_study = require('../models').plan_study_model;
const programming = require('../models').programming_model;
const subject = require('../models').subject_model;
const timetable = require('../models').timetable_model;
const teacher = require('../models').teacher_model;
const users = require('../models').users_model;
const db = require('../models');

module.exports = {

    listFull(req, res) {
        return timetable
            .findAll({
                include: [{ model: programming }]
            })
            .then((project) => res.status(200).send(project))
            .catch((error) => { res.status(400).send(error); });
    },


    getById(req, res) {
        console.log(req.params.id);
        return timetable
            .findByPk(req.params.id)
            .then((project) => {
                console.log(project);
                if (!project) {
                    return res.status(400).send({
                        message: 'timetable Not Found',
                    });
                }
                return res.status(200).send(project);
            }).catch((error) =>
                res.status(400).send(error));
    },

    calendarFull(req, res) {
        console.log(req);
        return timetable
            .findAll({
                attributes: ['id', 'date', 'star_time', 'end_time', 'day_week_id'],
                include: [
                    {
                        model: programming,
                        attributes: ['id'],
                        include: [
                            {
                                model: offer,
                                attributes: ['id'],
                                include: [
                                    {
                                        model: plan_study,
                                        attributes: ['id'],
                                        include: [
                                            {
                                                model: subject,
                                                attributes: ['subject','id'],
                                                where: {
                                                    department_id: req.body.department
                                                }
                                            }
                                        ],
                                        where: {
                                            curriculum_id: req.body.curriculum,
                                            semester_id: req.body.semester
                                        }

                                    }
                                ],
                                where: {
                                    region_id: req.body.region,
                                    calendar_id: req.body.calendar
                                }

                            },
                            {
                                model: teacher,
                                attributes: ['id'],
                                include: [
                                    {
                                        model: users,
                                        attributes: ['first_name']
                                    }
                                ]
                            }
                        ]
                    }
                ],
                order: [
                    ['date', 'ASC'],
                    ['star_time', 'ASC'],
                    ['day_week_id', 'ASC']
                ]
            })
            .then((project) => res.status(200).send(project))
            .catch((error) => { res.status(400).send(error); });
    },

    add(req, res) {
        console.log(req);
        return timetable.create({
            date: req.body.date,
            programming_id: req.body.programming_id,
            day_week_id: req.body.day_week_id,
            star_time: req.body.star_time,
            end_time: req.body.end_time
        })
            .then((project) => res.status(201).send(project))
            .catch((error) => res.status(500).send(error));
    },

    update(req, res) {

        return timetable
            .findByPk(req.params.id).then(project => {
                if (!project) {
                    return res.status(404).send({
                        message: 'timetable Not Found',
                    });
                }
                return project
                    .update({
                        date: req.body.date || project.date,
                        programming_id: req.body.programming_id || project.programming_id,
                        day_week_id: req.body.day_week_id || project.day_week_id,
                        star_time: req.body.star_time || project.star_time,
                        end_time: req.body.end_time || project.end_time
                    })
                    .then(() => res.status(200).send(project))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return timetable
            .findByPk(req.params.id)
            .then(project => {
                if (!project) {
                    return res.status(400).send({
                        message: 'timetable Not Found',
                    });
                }
                return project
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            }).catch((error) => res.status(400).send(error));
    },

    getSQL(req, res) {
        return db.sequelize.query("SELECT * FROM timetable")
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