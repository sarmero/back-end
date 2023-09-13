
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
    department_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "department_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "department_model"
      }
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
    time: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "time",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "department_chat",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const DepartmentChatModel = sequelize.define("department_chat_model", attributes, options);
  
DepartmentChatModel.associate = function (models) {
	DepartmentChatModel.belongsTo(models.users_model, {
      foreignKey:'user_id'
    });

	DepartmentChatModel.belongsTo(models.department_model, {
      foreignKey:'department_id'
    });

	DepartmentChatModel.hasMany(models.department_messages_model, {
      foreignKey: 'chat_id'
    });

};
return DepartmentChatModel;
};