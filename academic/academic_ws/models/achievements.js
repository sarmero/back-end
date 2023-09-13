
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
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "user_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "users_model"
      }
    },
    event_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "event_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "event_model"
      }
    }
  };
  const options = {
    tableName: "achievements",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const AchievementsModel = sequelize.define("achievements_model", attributes, options);
  
AchievementsModel.associate = function (models) {
	AchievementsModel.belongsTo(models.users_model, {
      foreignKey:'user_id'
    });

	AchievementsModel.belongsTo(models.event_model, {
      foreignKey:'event_id'
    });

};
return AchievementsModel;
};