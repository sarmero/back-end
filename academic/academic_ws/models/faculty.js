
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
    faculty: {
      type: DataTypes.CHAR(150),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "faculty",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "faculty",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const FacultyModel = sequelize.define("faculty_model", attributes, options);
  
FacultyModel.associate = function (models) {
	FacultyModel.hasMany(models.department_model, {
      foreignKey: 'faculty_id'
    });

};
return FacultyModel;
};