
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
    observation: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "observation",
      autoIncrement: false
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
    tableName: "observation",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const ObservationModel = sequelize.define("observation_model", attributes, options);
  
ObservationModel.associate = function (models) {
	ObservationModel.belongsTo(models.offer_model, {
      foreignKey:'offer_id'
    });

};
return ObservationModel;
};