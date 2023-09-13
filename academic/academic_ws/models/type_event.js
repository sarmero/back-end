
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
    event: {
      type: DataTypes.CHAR(250),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "event",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "type_event",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const TypeEventModel = sequelize.define("type_event_model", attributes, options);
  
TypeEventModel.associate = function (models) {
	TypeEventModel.hasMany(models.event_model, {
      foreignKey: 'type_event_id'
    });

};
return TypeEventModel;
};