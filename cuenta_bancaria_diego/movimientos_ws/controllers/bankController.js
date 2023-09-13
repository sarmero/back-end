const { Transaction } = require('sequelize');

const transaction = require('../models').transactions_model;
const users = require('../models').users_model;
const operation = require('../models').operation_model;
const db = require('../models');

module.exports = {
  list(req, res) {
    return transaction
      .findAll({})
      .then(project => res.status(200).send(project))
      .catch(error => {
        res.status(400).send(error);
      });
  },

  listFull(req, res) {
    return transaction
      .findAll({
        attributes: ['id', 'account_receiver', 'date', 'amount'],
        include: [
          {
            attributes: ['operation'],
            model: operation
          },
          {
            attributes: ['name', 'lastname', 'account'],
            model: users
          }
        ]
      })
      .then((project) => res.status(200).send(project))
      .catch((error) => { res.status(400).send(error); });
  },

  listEnableFull(req, res) {
    return transaction
      .findAll({
        attributes: ['id', 'amount'], include: [{
          attributes: ['id', 'operation'],
          model: operation
        }, {
          model: users
        }],
        where: {
          state: true
        },
        order: [
          ['date', 'DESC']
        ]
      })
      .then((project) => res.status(200).send(project))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    console.log(req.params.id);
    return transaction.findByPk(req.params.id).then((project) => {
      console.log(project);
      if (!project) {
        return res.status(500).send({
          message: 'project Not Found',
        });
      } return res.status(200).send(project);
    }).catch((error) => res.status(500).send(error));
  },

  add(req, res) {
    return transaction
      .create({
        id_operation: req.body.id_operation,
        account_receiver: req.body.account_receiver,
        date: req.body.date,
        description: req.body.description,
        amount: req.body.amount,
        id_user: req.body.id_user
      })
      .then((project) => res.status(201).send(project))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return transaction
      .findByPk(req.params.id)
      .then(project => {
        if (!project) {
          return res.status(404).send({
            message: 'project Not Found',
          });
        } return project.update({
          id_operation: req.body.id_operation || project.id_operation,
          account_receiver: req.body.account_receiver || project.account_receiver,
          date: req.body.date || project.date,
          description: req.body.description || project.description,
          amount: req.body.amount || project.amount,
          id_user: req.body.id_user || project.id_user
        }).then(() => res.status(200).send(project))
          .catch((error) => res.status(400).send(error));
      }).catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return transaction
      .findByPk(req.params.id)
      .then(project => {
        if (!project) {
          return res.status(400).send({
            message: 'project Not Found',
          });
        } return project.destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  getSQL(req, res) {
    return db.sequelize.query("SELECT * FROM project")
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
