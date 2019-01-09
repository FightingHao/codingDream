module.exports = {
  // 添加
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'goods',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      shop_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      thumb_url: Sequelize.STRING,
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE
    }
  ),
  // 回滚/删除
  down: queryInterface => queryInterface.dropTable('goods')
}