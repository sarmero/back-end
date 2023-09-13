
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
    profession_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "profession_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "profession_model"
      }
    },
    curriculum_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "curriculum_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "curriculum_model"
      }
    },
    semester_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "semester_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "semester_model"
      }
    },
    region_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "region_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "region_model"
      }
    }
  };
  const options = {
    tableName: "student",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const StudentModel = sequelize.define("student_model", attributes, options);
  
StudentModel.associate = function (models) {
	StudentModel.belongsTo(models.users_model, {
      foreignKey:'user_id'
    });

	StudentModel.belongsTo(models.profession_model, {
      foreignKey:'profession_id'
    });

	StudentModel.belongsTo(models.curriculum_model, {
      foreignKey:'curriculum_id'
    });

	StudentModel.belongsTo(models.semester_model, {
      foreignKey:'semester_id'
    });

	StudentModel.belongsTo(models.region_model, {
      foreignKey:'region_id'
    });

	StudentModel.hasMany(models.inscription_model, {
      foreignKey: 'student_id'
    });

};
return StudentModel;
};