
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
    message: {
      type: DataTypes.CHAR(300),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "message",
      autoIncrement: false
    },
    type: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "type",
      autoIncrement: false
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
    },
    chat_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "chat_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "department_chat_model"
      }
    }
  };
  const options = {
    tableName: "department_messages",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const DepartmentMessagesModel = sequelize.define("department_messages_model", attributes, options);
  
DepartmentMessagesModel.associate = function (models) {
	DepartmentMessagesModel.belongsTo(models.department_chat_model, {
      foreignKey:'chat_id'
    });

};
return DepartmentMessagesModel;
};