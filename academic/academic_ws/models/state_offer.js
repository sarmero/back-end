
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
    tableName: "state_offer",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const StateOfferModel = sequelize.define("state_offer_model", attributes, options);
  
StateOfferModel.associate = function (models) {
	StateOfferModel.hasMany(models.offer_model, {
      foreignKey: 'state_id'
    });

};
return StateOfferModel;
};