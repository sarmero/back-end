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
    title: {
      type: DataTypes.CHAR(200),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "title",
      autoIncrement: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "description",
      autoIncrement: false
    },
    state: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "state",
      autoIncrement: false
    },
    id_per_res: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "id_per_res",
      autoIncrement: false,
      references: {
        key: "id",
        model: "employ_model"
      }
    }
  };
  const options = {
    tableName: "project",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'

  };
  const ProjectModel = sequelize.define("project_model", attributes, options);

  ProjectModel.associate = function (models) {
    ProjectModel.hasMany(models.activity_model, {
      foreignKey: 'id_project'
    });
    ProjectModel.belongsTo(models.employ_model, {
      foreignKey: 'id_per_res'
    });
  };

  return ProjectModel;
};