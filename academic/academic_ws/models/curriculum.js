
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
    description: {
      type: DataTypes.CHAR(50),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "description",
      autoIncrement: false
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
    tableName: "curriculum",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const CurriculumModel = sequelize.define("curriculum_model", attributes, options);
  
CurriculumModel.associate = function (models) {
	CurriculumModel.belongsTo(models.profession_model, {
      foreignKey:'profession_id'
    });

	CurriculumModel.hasMany(models.plan_study_model, {
      foreignKey: 'curriculum_id'
    });

	CurriculumModel.hasMany(models.student_model, {
      foreignKey: 'curriculum_id'
    });

};
return CurriculumModel;
};