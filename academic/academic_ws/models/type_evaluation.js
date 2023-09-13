
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
    type_evaluation: {
      type: DataTypes.CHAR(100),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "type_evaluation",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "type_evaluation",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const TypeEvaluationModel = sequelize.define("type_evaluation_model", attributes, options);
  
TypeEvaluationModel.associate = function (models) {
	TypeEvaluationModel.hasMany(models.evaluation_model, {
      foreignKey: 'type_evaluation_id'
    });

};
return TypeEvaluationModel;
};