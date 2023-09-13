const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id",
      autoIncrement: true
    },
    id_operation: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "id_operation",
      autoIncrement: false,
      references: {
        key: "id",
        model: "operation_model"
      }
    },
    account_receiver: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "account_receiver",
      autoIncrement: false
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "date",
      autoIncrement: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "description",
      autoIncrement: false
    },
    amount: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "amount",
      autoIncrement: false
    },
    id_user: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "id_user",
      autoIncrement: false,
      references: {
        key: "id",
        model: "users_model"
      }
    }
  };
  const options = {
    tableName: "transactions",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const TransactionsModel = sequelize.define("transactions_model", attributes, options);

  TransactionsModel.associate = function (models) {
    TransactionsModel.belongsTo(models.users_model, {
      foreignKey: 'id_user'
    });

    TransactionsModel.belongsTo(models.operation_model, {
      foreignKey: 'id_operation'
    });
  };

  return TransactionsModel;
};