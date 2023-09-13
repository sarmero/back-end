
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
    student_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "student_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "student_model"
      }
    },
    offer_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "offer_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "offer_model"
      }
    }
  };
  const options = {
    tableName: "inscription",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const InscriptionModel = sequelize.define("inscription_model", attributes, options);
  
InscriptionModel.associate = function (models) {
	InscriptionModel.belongsTo(models.student_model, {
      foreignKey:'student_id'
    });

	InscriptionModel.belongsTo(models.offer_model, {
      foreignKey:'offer_id'
    });

	InscriptionModel.hasMany(models.note_model, {
      foreignKey: 'inscription_id'
    });

};
return InscriptionModel;
};