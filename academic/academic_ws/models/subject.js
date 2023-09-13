
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
    subject: {
      type: DataTypes.CHAR(300),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "subject",
      autoIncrement: false
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
    code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "code",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "subject",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const SubjectModel = sequelize.define("subject_model", attributes, options);

  SubjectModel.associate = function (models) {
    SubjectModel.belongsTo(models.department_model, {
      foreignKey: 'department_id'
    });

    SubjectModel.hasMany(models.plan_study_model, {
      foreignKey: 'subject_id'
    });

    SubjectModel.hasMany(models.theme_model, {
      foreignKey: 'subject_id'
    });

    SubjectModel.hasMany(models.type_material_model, {
      foreignKey: 'subject_id'
    });

  };
  return SubjectModel;
};