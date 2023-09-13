
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
    profession: {
      type: DataTypes.CHAR(300),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "profession",
      autoIncrement: false
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
    formation_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "formation_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "formation_model"
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
    tableName: "profession",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const ProfessionModel = sequelize.define("profession_model", attributes, options);
  
ProfessionModel.associate = function (models) {
	ProfessionModel.belongsTo(models.department_model, {
      foreignKey:'department_id'
    });

	ProfessionModel.belongsTo(models.formation_model, {
      foreignKey:'formation_id'
    });

	ProfessionModel.hasMany(models.curriculum_model, {
      foreignKey: 'profession_id'
    });

	ProfessionModel.hasMany(models.student_model, {
      foreignKey: 'profession_id'
    });

};
return ProfessionModel;
};