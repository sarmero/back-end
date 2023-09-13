
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
    departament: {
      type: DataTypes.CHAR(200),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "departament",
      autoIncrement: false
    },
    faculty_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "faculty_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "faculty_model"
      }
    }
  };
  const options = {
    tableName: "department",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const DepartmentModel = sequelize.define("department_model", attributes, options);
  
DepartmentModel.associate = function (models) {
	DepartmentModel.belongsTo(models.faculty_model, {
      foreignKey:'faculty_id'
    });

	DepartmentModel.hasMany(models.adminn_model, {
      foreignKey: 'department_id'
    });

	DepartmentModel.hasMany(models.department_chat_model, {
      foreignKey: 'department_id'
    });

	DepartmentModel.hasMany(models.profession_model, {
      foreignKey: 'department_id'
    });

	DepartmentModel.hasMany(models.publications_model, {
      foreignKey: 'department_id'
    });

	DepartmentModel.hasMany(models.subject_model, {
      foreignKey: 'department_id'
    });

	DepartmentModel.hasMany(models.teacher_model, {
      foreignKey: 'department_id'
    });

};
return DepartmentModel;
};