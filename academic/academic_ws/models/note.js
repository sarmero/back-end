
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
    inscription_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "inscription_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "inscription_model"
      }
    },
    evaluation_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "evaluation_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "evaluation_model"
      }
    },
    note: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "note",
      autoIncrement: false
    },
    percentage: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "percentage",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "note",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const NoteModel = sequelize.define("note_model", attributes, options);
  
NoteModel.associate = function (models) {
	NoteModel.belongsTo(models.inscription_model, {
      foreignKey:'inscription_id'
    });

	NoteModel.belongsTo(models.evaluation_model, {
      foreignKey:'evaluation_id'
    });

};
return NoteModel;
};