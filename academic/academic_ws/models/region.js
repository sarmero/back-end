
const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: "nextval(\"Region_id_seq\"::regclass)",
      comment: null,
      primaryKey: true,
      field: "id",
      autoIncrement: false
    },
    region: {
      type: DataTypes.CHAR(300),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "region",
      autoIncrement: false
    },
    state_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "state_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "states_model"
      }
    }
  };
  const options = {
    tableName: "region",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const RegionModel = sequelize.define("region_model", attributes, options);
  
RegionModel.associate = function (models) {
	RegionModel.belongsTo(models.states_model, {
      foreignKey:'state_id'
    });

	RegionModel.hasMany(models.offer_model, {
      foreignKey: 'region_id'
    });

	RegionModel.hasMany(models.student_model, {
      foreignKey: 'region_id'
    });

};
return RegionModel;
};