const { DataTypes } = require('sequelize')
module.exports = sequelize => {
  const attributes = {
    name: {
      type: DataTypes.CHAR(200),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: 'name',
      autoIncrement: false
    },
    lastname: {
      type: DataTypes.CHAR(200),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: 'lastname',
      autoIncrement: false
    },
    account: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: 'account',
      autoIncrement: false
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: 'id',
      autoIncrement: true
    }
  }
  const options = {
    tableName: 'users',
    comment: '',
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  }
  const UsersModel = sequelize.define('users_model', attributes, options)
  return UsersModel
}
