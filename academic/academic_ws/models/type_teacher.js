
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
    description: {
      type: DataTypes.CHAR(200),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "description",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "type_teacher",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const TypeTeacherModel = sequelize.define("type_teacher_model", attributes, options);
  
TypeTeacherModel.associate = function (models) {
	TypeTeacherModel.hasMany(models.teacher_model, {
      foreignKey: 'type_teacher_id'
    });

};
return TypeTeacherModel;
};