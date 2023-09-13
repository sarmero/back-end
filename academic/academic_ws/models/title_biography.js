
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
      type: DataTypes.CHAR(100),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "title",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "title_biography",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const TitleBiographyModel = sequelize.define("title_biography_model", attributes, options);
  
TitleBiographyModel.associate = function (models) {
	TitleBiographyModel.hasMany(models.biography_model, {
      foreignKey: 'title_id'
    });

};
return TitleBiographyModel;
};