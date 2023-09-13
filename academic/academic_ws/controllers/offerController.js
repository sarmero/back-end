const offer = require('../models').offer_model;
const plan_study = require('../models').plan_study_model;
const subject = require('../models').subject_model;
const state_offer = require('../models').state_offer_model;
const db = require('../models');

module.exports = {
    listFull(req, res) {
        return offer
            .findAll({
                include: [{ model: plan_study }]
            })
            .then((project) => res.status(200).send(project))
            .catch((error) => { res.status(400).send(error); });
    },

    subjectOffer(req, res) {
        return offer
            .findAll({
                attributes: ['id'],
                include: [
                    {
                        model: plan_study,
                        attributes: ['id'],
                        include: [
                            {
                                model: subject,
                                attributes: ['id', 'subject'],
                                where: {
                                    department_id: req.body.department
                                }
                            }
                        ],
                        where: {
                            curriculum_id: req.body.curriculum,
                            semester_id: req.body.semester
                        }

                    },
                    {
                        attributes: ['state'],
                        model: state_offer
                    }
                ],
                where: {

                    region_id: req.body.region,
                    calendar_id: req.body.calendar
                }
            })
            .then((project) => res.status(200).send(project))
            .catch((error) => { res.status(400).send(error); });
    },

    



    getById(req, res) {
        console.log(req.params.id);
        return offer
            .findByPk(req.params.id)
            .then((project) => {
                console.log(project);
                if (!project) {
                    return res.status(400).send({
                        message: 'offer Not Found',
                    });
                }
                return res.status(200).send(project);
            }).catch((error) =>
                res.status(400).send(error));
    },

    add(req, res) {
        console.log(req);
        return offer.create({
            plan_study_id: req.body.plan_study_id,
            calendar_id: req.body.calendar_id,
            region_id: req.body.region_id,
            code: req.body.code,
            state_id: req.body.state_id
        })
            .then((project) => res.status(201).send(project))
            .catch((error) => res.status(500).send(error));
    },

    update(req, res) {

        return offer
            .findByPk(req.params.id).then(project => {
                if (!project) {
                    return res.status(404).send({
                        message: 'offer Not Found',
                    });
                }
                return project
                    .update({
                        plan_study_id: req.body.plan_study_id || project.plan_study_id,
                        calendar_id: req.body.calendar_id || project.calendar_id,
                        region_id: req.body.region_id || project.region_id,
                        code: req.body.code || project.code,
                        state_id: req.body.state_id || project.state_id
                    })
                    .then(() => res.status(200).send(project))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return offer
            .findByPk(req.params.id)
            .then(project => {
                if (!project) {
                    return res.status(400).send({
                        message: 'offer Not Found',
                    });
                }
                return project
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            }).catch((error) => res.status(400).send(error));
    },

    getSQL(req, res) {
        return db.sequelize.query("SELECT * FROM offer")
            .then((result) => {
                console.log(result); if (!result) {
                    return res.status(404).send({
                        message: 'result Not Found',
                    });
                } return res.status(200).send(result[0]);
            })
            .catch((error) => res.status(400).send(error));
    },





    /*
    "SELECT subject.subject, timetable.date,
    users.first_name, timetable.star_time, timetable.end_time, timetable.day_week_id
    FROM public.offer
    JOIN public.plan_study ON plan_study.id = offer.plan_study_id
    JOIN public.curriculum ON plan_study.curriculum_id = curriculum.id
    JOIN public.subject ON subject.id = plan_study.subject_id
    JOIN public.programming ON programming.offer_id = offer.id
    JOIN public.timetable ON timetable.programming_id = programming.id
    JOIN public.teacher ON teacher.id = programming.teacher_id
    JOIN public.users ON teacher.user_id =users.id 
    and offer.region_id = 1 and offer.calendar_id =1 and curriculum.id = 1 and subject.department_id = 2
    and plan_study.semester_id = 1
    ORDER BY  timetable.date, timetable.star_time, 
    timetable.day_week_id ASC
    
    */
};