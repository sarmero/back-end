
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
    }
  };
  const options = {
    tableName: "adminn",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const AdminnModel = sequelize.define("adminn_model", attributes, options);
  
AdminnModel.associate = function (models) {
	AdminnModel.belongsTo(models.users_model, {
      foreignKey:'user_id'
    });

	AdminnModel.belongsTo(models.department_model, {
      foreignKey:'department_id'
    });

};
return AdminnModel;
};