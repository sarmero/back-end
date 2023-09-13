
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
    plan_study_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "plan_study_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "plan_study_model"
      }
    },
    calendar_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "calendar_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "calendar_model"
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
    },
    code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "code",
      autoIncrement: false
    },
    state_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "state_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "state_offer_model"
      }
    }
  };
  const options = {
    tableName: "offer",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const OfferModel = sequelize.define("offer_model", attributes, options);

  OfferModel.associate = function (models) {
    OfferModel.belongsTo(models.plan_study_model, {
      foreignKey: 'plan_study_id'
    });

    OfferModel.belongsTo(models.calendar_model, {
      foreignKey: 'calendar_id'
    });

    OfferModel.belongsTo(models.region_model, {
      foreignKey: 'region_id'
    });

    OfferModel.belongsTo(models.state_offer_model, {
      foreignKey: 'state_id'
    });

    OfferModel.hasMany(models.inscription_model, {
      foreignKey: 'offer_id'
    });

    OfferModel.hasMany(models.material_model, {
      foreignKey: 'offer_id'
    });

    OfferModel.hasMany(models.observation_model, {
      foreignKey: 'offer_id'
    });

    OfferModel.hasMany(models.programming_model, {
      foreignKey: 'offer_id'
    });

  };
  return OfferModel;
};