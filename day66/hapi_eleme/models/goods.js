module.exports = (sequelize, DataTypes) => sequelize.define(
  'goods',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    thumb_url: DataTypes.STRING
  },
  {
    tablename: 'goods'
  },
);