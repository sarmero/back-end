
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
    formation: {
      type: DataTypes.CHAR(50),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "formation",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "formation",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const FormationModel = sequelize.define("formation_model", attributes, options);
  
FormationModel.associate = function (models) {
	FormationModel.hasMany(models.profession_model, {
      foreignKey: 'formation_id'
    });

};
return FormationModel;
};