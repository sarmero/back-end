
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
    material: {
      type: DataTypes.CHAR(100),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "material",
      autoIncrement: false
    },
    teacher_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "teacher_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "teacher_model"
      }
    },
    link_material: {
      type: DataTypes.CHAR(400),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "link_material",
      autoIncrement: false
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
    }
  };
  const options = {
    tableName: "type_material",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const TypeMaterialModel = sequelize.define("type_material_model", attributes, options);
  
TypeMaterialModel.associate = function (models) {
	TypeMaterialModel.belongsTo(models.teacher_model, {
      foreignKey:'teacher_id'
    });

	TypeMaterialModel.belongsTo(models.subject_model, {
      foreignKey:'subject_id'
    });

	TypeMaterialModel.hasMany(models.material_model, {
      foreignKey: 'type_material_id'
    });

};
return TypeMaterialModel;
};