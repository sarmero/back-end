const curriculum = require('../models').curriculum_model;
const profession = require('../models').profession_model;
const db = require('../models');

module.exports = {
    getById(req, res) {
        console.log(req.params.id);
        return curriculum
            .findByPk(req.params.id)
            .then((project) => {
                console.log(project);
                if (!project) {
                    return res.status(400).send({
                        message: 'curriculum Not Found',
                    });
                }
                return res.status(200).send(project);
            }).catch((error) =>
                res.status(400).send(error));
    },

    pensum_program(req, res) {
        return curriculum
            .findAll({
                attributes: ['id','description','code'],
                include: [
                    {
                        model: profession,
                        attributes: ['id','profession'], 
                        where: {
                            id: req.body.id,
                            department_id: req.body.department
                        }

                    }
                ]
            })
            .then((project) => res.status(200).send(project))
            .catch((error) => { res.status(400).send(error); });
    },

    pensum_department(req, res) {
        return curriculum
            .findAll({
                attributes: ['id','description','code'],
                include: [
                    {
                        model: profession,
                        attributes: ['id','profession'], 
                        where: {
                            department_id: req.body.department
                        },
                        order: [
                            ['profession', 'ASC'] 
                        ]

                    }
                ]
            })
            .then((project) => res.status(200).send(project))
            .catch((error) => { res.status(400).send(error); });
    },

    add(req, res) {
        console.log(req);
        return curriculum.create({
            description: req.body.description,
            profession_id: req.body.profession_id,
            code: req.body.code
        })
            .then((project) => res.status(201).send(project))
            .catch((error) => res.status(500).send(error));
    },

    update(req, res) {
    
        return curriculum
            .findByPk(req.params.id).then(project => {
                if (!project) {
                    return res.status(404).send({
                        message: 'curriculum Not Found',
                    });
                }
                return project
                    .update({
                        description: req.body.description || project.description,
                        profession_id: req.body.profession_id || project.profession_id,
                        code: req.body.code || project.code
                    })
                    .then(() => res.status(200).send(project))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return curriculum
            .findByPk(req.params.id)
            .then(project => {
                if (!project) {
                    return res.status(400).send({
                        message: 'curriculum Not Found',
                    });
                }
                return project
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            }).catch((error) => res.status(400).send(error));
    },

    getSQL(req, res) {
        return db.sequelize.query("SELECT * FROM curriculum")
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