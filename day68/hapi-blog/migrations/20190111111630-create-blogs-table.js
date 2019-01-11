'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('blogs', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    tag: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    count: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    short: {
      type: Sequelize.STRING
    },
    content: {
      type: Sequelize.STRING,
      allowNull: false
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    created_at: {
      type: Sequelize.DATE,
    },
    updated_at: {
      type: Sequelize.DATE
    }
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('blogs')
};
