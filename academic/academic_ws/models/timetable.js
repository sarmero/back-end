
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
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "date",
      autoIncrement: false
    },
    programming_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "programming_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "programming_model"
      }
    },
    day_week_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "day_week_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "day_week_model"
      }
    },
    star_time: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "star_time",
      autoIncrement: false
    },
    end_time: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "end_time",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "timetable",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const TimetableModel = sequelize.define("timetable_model", attributes, options);
  
TimetableModel.associate = function (models) {
	TimetableModel.belongsTo(models.programming_model, {
      foreignKey:'programming_id'
    });

	TimetableModel.belongsTo(models.day_week_model, {
      foreignKey:'day_week_id'
    });

};
return TimetableModel;
};