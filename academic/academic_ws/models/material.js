
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
    type_material_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "type_material_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "type_material_model"
      }
    },
    offer_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "offer_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "offer_model"
      }
    }
  };
  const options = {
    tableName: "material",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const MaterialModel = sequelize.define("material_model", attributes, options);
  
MaterialModel.associate = function (models) {
	MaterialModel.belongsTo(models.type_material_model, {
      foreignKey:'type_material_id'
    });

	MaterialModel.belongsTo(models.offer_model, {
      foreignKey:'offer_id'
    });

};
return MaterialModel;
};