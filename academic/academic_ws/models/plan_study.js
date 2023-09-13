
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
    subject_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "subject_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "subject_model"
      }
    },
    semester_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "semester_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "semester_model"
      }
    },
    curriculum_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "curriculum_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "curriculum_model"
      }
    }
  };
  const options = {
    tableName: "plan_study",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const PlanStudyModel = sequelize.define("plan_study_model", attributes, options);
  
PlanStudyModel.associate = function (models) {
	PlanStudyModel.belongsTo(models.subject_model, {
      foreignKey:'subject_id'
    });

	PlanStudyModel.belongsTo(models.semester_model, {
      foreignKey:'semester_id'
    });

	PlanStudyModel.belongsTo(models.curriculum_model, {
      foreignKey:'curriculum_id'
    });

	PlanStudyModel.hasMany(models.offer_model, {
      foreignKey: 'plan_study_id'
    });

};
return PlanStudyModel;
};