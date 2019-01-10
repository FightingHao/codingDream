module.exports = (sequelize, DataTypes) => sequelize.define(
  'users',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nick_name: {
      type: DataTypes.STRING,
      avatar_url: DataTypes.STRING,
      gender: DataTypes.INTEGER,
      open_id: DataTypes.STRING,
      session_key: DataTypes.STRING,
    },
    thumb_url: DataTypes.STRING
  },
  {
    tableName: 'users'
  }
)