
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
    publication: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "publication",
      autoIncrement: false
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "date",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "publications",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const PublicationsModel = sequelize.define("publications_model", attributes, options);
  
PublicationsModel.associate = function (models) {
	PublicationsModel.belongsTo(models.department_model, {
      foreignKey:'department_id'
    });

	PublicationsModel.hasMany(models.publication_comment_model, {
      foreignKey: 'publication_id'
    });

	PublicationsModel.hasMany(models.publication_like_model, {
      foreignKey: 'publication_id'
    });

};
return PublicationsModel;
};