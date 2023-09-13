const profession = require('../models').profession_model;
const department = require('../models').department_model;
const student = require('../models').student_model;
const faculty = require('../models').faculty_model;
const region = require('../models').region_model;
const semester = require('../models').semester_model;
const curriculum = require('../models').curriculum_model;
const db = require('../models');

module.exports = {
    getById(req, res) {
        console.log(req.params.id);
        return profession
            .findByPk(req.params.id)
            .then((project) => {
                console.log(project);
                if (!project) {
                    return res.status(400).send({
                        message: 'profession Not Found',
                    });
                }
                return res.status(200).send(project);
            }).catch((error) =>
                res.status(400).send(error));
    },

    

    departmentById(req, res) {
        return profession
            .findAll({
                attributes: ['id', 'profession', 'code'],
                where: {
                    department_id: req.body.department
                },
                order: [
                    ['profession', 'ASC']
                ]
            })
            .then((project) => res.status(200).send(project))
            .catch((error) => { res.status(400).send(error); });
    },

    add(req, res) {
        console.log(req);
        return profession.create({
            profession: req.body.profession,
            department_id: req.body.department_id,
            formation_id: req.body.formation_id,
            code: req.body.code
        })
            .then((project) => res.status(201).send(project))
            .catch((error) => res.status(500).send(error));
    },

    update(req, res) {

        return profession
            .findByPk(req.params.id).then(project => {
                if (!project) {
                    return res.status(404).send({
                        message: 'profession Not Found',
                    });
                }
                return project
                    .update({
                        profession: req.body.profession || project.profession,
                        department_id: req.body.department_id || project.department_id,
                        formation_id: req.body.formation_id || project.formation_id,
                        code: req.body.code || project.code
                    })
                    .then(() => res.status(200).send(project))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return profession
            .findByPk(req.params.id)
            .then(project => {
                if (!project) {
                    return res.status(400).send({
                        message: 'profession Not Found',
                    });
                }
                return project
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            }).catch((error) => res.status(400).send(error));
    },

    getSQL(req, res) {
        return db.sequelize.query("SELECT * FROM profession")
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