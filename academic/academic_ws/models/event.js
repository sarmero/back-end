
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
      type: DataTypes.CHAR(200),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "event",
      autoIncrement: false
    },
    type_event_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "type_event_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "type_event_model"
      }
    },
    code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "code",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "event",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const EventModel = sequelize.define("event_model", attributes, options);
  
EventModel.associate = function (models) {
	EventModel.belongsTo(models.type_event_model, {
      foreignKey:'type_event_id'
    });

	EventModel.hasMany(models.achievements_model, {
      foreignKey: 'event_id'
    });

};
return EventModel;
};