
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
    offer_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "offer_id",
      autoIncrement: false,
      unique: "programming_offer_id_key",
      references: {
        key: "id",
        model: "offer_model"
      }
    },
    teacher_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "teacher_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "teacher_model"
      }
    }
  };
  const options = {
    tableName: "programming",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const ProgrammingModel = sequelize.define("programming_model", attributes, options);
  
ProgrammingModel.associate = function (models) {
	ProgrammingModel.belongsTo(models.offer_model, {
      foreignKey:'offer_id'
    });

	ProgrammingModel.belongsTo(models.teacher_model, {
      foreignKey:'teacher_id'
    });

	ProgrammingModel.hasMany(models.timetable_model, {
      foreignKey: 'programming_id'
    });

};
return ProgrammingModel;
};