
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
    }
  };
  const options = {
    tableName: "publication_like",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const PublicationLikeModel = sequelize.define("publication_like_model", attributes, options);
  
PublicationLikeModel.associate = function (models) {
	PublicationLikeModel.belongsTo(models.publications_model, {
      foreignKey:'publication_id'
    });

	PublicationLikeModel.belongsTo(models.users_model, {
      foreignKey:'user_id'
    });

};
return PublicationLikeModel;
};