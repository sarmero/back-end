
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
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "user_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "users_model"
      }
    },
    department_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "department_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "department_model"
      }
    },
    type_teacher_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "type_teacher_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "type_teacher_model"
      }
    }
  };
  const options = {
    tableName: "teacher",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const TeacherModel = sequelize.define("teacher_model", attributes, options);
  
TeacherModel.associate = function (models) {
	TeacherModel.belongsTo(models.users_model, {
      foreignKey:'user_id'
    });

	TeacherModel.belongsTo(models.department_model, {
      foreignKey:'department_id'
    });

	TeacherModel.belongsTo(models.type_teacher_model, {
      foreignKey:'type_teacher_id'
    });

	TeacherModel.hasMany(models.programming_model, {
      foreignKey: 'teacher_id'
    });

	TeacherModel.hasMany(models.type_material_model, {
      foreignKey: 'teacher_id'
    });

};
return TeacherModel;
};