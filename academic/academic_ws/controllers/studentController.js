const student = require('../models').student_model;
const users = require('../models').users_model;
const semester = require('../models').semester_model;
const profession = require('../models').profession_model;
const region = require('../models').region_model;
const curriculum = require('../models').curriculum_model;
const faculty = require('../models').faculty_model;
const department = require('../models').department_model;
const formation = require('../models').formation_model;
const db = require('../models');

module.exports = {
    search_code(req, res) {
        return student
            .findAll({
                attributes: ['id'],
                include: [
                    {
                        model: users,
                        attributes: ['id', 'first_name', 'last_name'],
                        where: {
                            usrname: req.body.usrname
                        }
                    },
                    {
                        model: semester,
                        attributes: ['semester']
                    },
                    {
                        model: profession,
                        attributes: ['profession']
                    }
                ]
            })
            .then((project) => res.status(200).send(project))
            .catch((error) => { res.status(400).send(error); });
    },

    userId(req, res) {
        console.log("cuerpo");
        console.log(req.params.usr);
        return student
            .findAll({
                attributes: [],
                include: [
                    {
                        model: region,
                        attributes: ['region']
                    },
                    {
                        model: semester,
                        attributes: ['semester']
                    },
                    {
                        model: curriculum,
                        attributes: ['description']
                    },
                    {
                        model: profession,
                        attributes: ['profession'],
                        include: [
                            {
                                model: department,
                                attributes: ['id', 'departament'],
                                include: [
                                    {
                                        model: faculty,
                                        attributes: ['faculty']
                                    }
                                ]
                            },
                            {
                                model: formation,
                                attributes: ['formation'],
                            }
                        ]

                    }

                ],
                where: {
                    user_id: req.params.usr
                }
            })
            .then((project) => res.status(200).send(project))
            .catch((error) => { res.status(400).send(error); });
    },

    search(req, res) {
        return student
            .findAll({
                attributes: ['id'],
                include: [
                    {
                        model: users,
                        attributes: ['id', 'first_name', 'last_name', 'phone', 'email'],
                    },
                    {
                        model: semester,
                        attributes: ['semester'],
                        where: {
                            id: req.body.semester
                        }
                    },
                    {
                        model: profession,
                        attributes: ['profession'],
                        where: {
                            department_id: req.body.department
                        }
                    },
                    {
                        model: region,
                        attributes: ['region'],
                        where: {
                            id: req.body.region
                        }
                    }
                ]
            })
            .then((project) => res.status(200).send(project))
            .catch((error) => { res.status(400).send(error); });
    },

    getById(req, res) {
        console.log(req.params.id);
        return student
            .findByPk(req.params.id)
            .then((project) => {
                console.log(project);
                if (!project) {
                    return res.status(400).send({
                        message: 'student Not Found',
                    });
                }
                return res.status(200).send(project);
            }).catch((error) =>
                res.status(400).send(error));
    },

    add(req, res) {
        console.log(req);
        return student.create({
            user_id: req.body.user_id,
            profession_id: req.body.profession_id,
            curriculum_id: req.body.curriculum_id,
            semester_id: req.body.semester_id,
            region_id: req.body.region_id
        })
            .then((project) => res.status(201).send(project))
            .catch((error) => res.status(500).send(error));
    },

    update(req, res) {

        return student
            .findByPk(req.params.id).then(project => {
                if (!project) {
                    return res.status(404).send({
                        message: 'student Not Found',
                    });
                }
                return project
                    .update({
                        user_id: req.body.user_id || project.user_id,
                        profession_id: req.body.profession_id || project.profession_id,
                        curriculum_id: req.body.curriculum_id || project.curriculum_id,
                        semester_id: req.body.semester_id || project.semester_id,
                        region_id: req.body.region_id || project.region_id
                    })
                    .then(() => res.status(200).send(project))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return student
            .findByPk(req.params.id)
            .then(project => {
                if (!project) {
                    return res.status(400).send({
                        message: 'student Not Found',
                    });
                }
                return project
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            }).catch((error) => res.status(400).send(error));
    },

    getSQL(req, res) {
        return db.sequelize.query("SELECT * FROM student")
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