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
      autoIncrement: false
    },
    operation: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "operation",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "operation",
    comment: "",
    indexes: [],
    timestamps: false, 
    underscored: true, 
    freezeTableName: true, 
    schema: 'public'
  };
  const OperationModel = sequelize.define("operation_model", attributes, options);

  OperationModel.associate = function (models) {
    OperationModel.hasMany(models.transactions_model, {
      foreignKey: 'id_operation'
    });
  };

  return OperationModel;
};