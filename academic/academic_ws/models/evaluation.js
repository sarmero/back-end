
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
    theme_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "theme_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "theme_model"
      }
    },
    type_evaluation_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "type_evaluation_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "type_evaluation_model"
      }
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
    state: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "state",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "evaluation",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const EvaluationModel = sequelize.define("evaluation_model", attributes, options);
  
EvaluationModel.associate = function (models) {
	EvaluationModel.belongsTo(models.theme_model, {
      foreignKey:'theme_id'
    });

	EvaluationModel.belongsTo(models.type_evaluation_model, {
      foreignKey:'type_evaluation_id'
    });

	EvaluationModel.hasMany(models.note_model, {
      foreignKey: 'evaluation_id'
    });

};
return EvaluationModel;
};