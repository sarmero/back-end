
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
    theme: {
      type: DataTypes.CHAR(200),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "theme",
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
    tableName: "theme",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const ThemeModel = sequelize.define("theme_model", attributes, options);
  
ThemeModel.associate = function (models) {
	ThemeModel.belongsTo(models.subject_model, {
      foreignKey:'subject_id'
    });

	ThemeModel.hasMany(models.evaluation_model, {
      foreignKey: 'theme_id'
    });

};
return ThemeModel;
};