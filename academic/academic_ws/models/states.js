
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
    state: {
      type: DataTypes.CHAR(100),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "state",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "states",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const StatesModel = sequelize.define("states_model", attributes, options);
  
StatesModel.associate = function (models) {
	StatesModel.hasMany(models.region_model, {
      foreignKey: 'state_id'
    });

};
return StatesModel;
};