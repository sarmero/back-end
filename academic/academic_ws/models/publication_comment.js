
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
    publication_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "publication_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "publications_model"
      }
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
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "comment",
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
    response: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "response",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "publication_comment",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const PublicationCommentModel = sequelize.define("publication_comment_model", attributes, options);
  
PublicationCommentModel.associate = function (models) {
	PublicationCommentModel.belongsTo(models.publications_model, {
      foreignKey:'publication_id'
    });

	PublicationCommentModel.belongsTo(models.users_model, {
      foreignKey:'user_id'
    });

};
return PublicationCommentModel;
};