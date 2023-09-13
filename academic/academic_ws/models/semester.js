
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
    semester: {
      type: DataTypes.CHAR(20),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "semester",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "semester",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const SemesterModel = sequelize.define("semester_model", attributes, options);
  
SemesterModel.associate = function (models) {
	SemesterModel.hasMany(models.plan_study_model, {
      foreignKey: 'semester_id'
    });

	SemesterModel.hasMany(models.student_model, {
      foreignKey: 'semester_id'
    });

};
return SemesterModel;
};