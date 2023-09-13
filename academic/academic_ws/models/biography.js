
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
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "description",
      autoIncrement: false
    },
    title_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "title_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "title_biography_model"
      }
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
    }
  };
  const options = {
    tableName: "biography",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const BiographyModel = sequelize.define("biography_model", attributes, options);
  
BiographyModel.associate = function (models) {
	BiographyModel.belongsTo(models.title_biography_model, {
      foreignKey:'title_id'
    });

	BiographyModel.belongsTo(models.users_model, {
      foreignKey:'user_id'
    });

};
return BiographyModel;
};