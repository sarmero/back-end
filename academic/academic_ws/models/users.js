
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
    usrname: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "usrname",
      autoIncrement: false
    },
    password: {
      type: DataTypes.CHAR(200),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "password",
      autoIncrement: false
    },
    first_name: {
      type: DataTypes.CHAR(100),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "first_name",
      autoIncrement: false
    },
    last_name: {
      type: DataTypes.CHAR(200),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "last_name",
      autoIncrement: false
    },
    gender: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "gender",
      autoIncrement: false
    },
    rolle_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "rolle_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "rolle_model"
      }
    },
    phone: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "phone",
      autoIncrement: false
    },
    email: {
      type: DataTypes.CHAR(200),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "email",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "users",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const UsersModel = sequelize.define("users_model", attributes, options);
  
UsersModel.associate = function (models) {
	UsersModel.belongsTo(models.rolle_model, {
      foreignKey:'rolle_id'
    });

	UsersModel.hasMany(models.achievements_model, {
      foreignKey: 'user_id'
    });

	UsersModel.hasMany(models.adminn_model, {
      foreignKey: 'user_id'
    });

	UsersModel.hasMany(models.biography_model, {
      foreignKey: 'user_id'
    });

	UsersModel.hasMany(models.department_chat_model, {
      foreignKey: 'user_id'
    });

	UsersModel.hasMany(models.publication_comment_model, {
      foreignKey: 'user_id'
    });

	UsersModel.hasMany(models.publication_like_model, {
      foreignKey: 'user_id'
    });

	UsersModel.hasMany(models.student_model, {
      foreignKey: 'user_id'
    });

	UsersModel.hasMany(models.teacher_model, {
      foreignKey: 'user_id'
    });

};
return UsersModel;
};