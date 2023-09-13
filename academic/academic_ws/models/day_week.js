
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
    day: {
      type: DataTypes.CHAR(20),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "day",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "day_week",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const DayWeekModel = sequelize.define("day_week_model", attributes, options);
  
DayWeekModel.associate = function (models) {
	DayWeekModel.hasMany(models.timetable_model, {
      foreignKey: 'day_week_id'
    });

};
return DayWeekModel;
};