const dayjs = require('dayjs');

const timestamp = dayjs(new Date()).format('YYYY-MM-DD HH-mm-ss');

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('blogs', [{
    id: 1,
    title: 'blog title 1',
    tag: 'tag1;tag2;tag3',
    count: 34,
    short: '这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,',
    content: '# test title ## subtitle',
    user_id: 1,
    created_at: timestamp,
    updated_at: timestamp,
  }, {
    id: 2,
    title: 'blog title 2',
    tag: 'tag1;tag2',
    count: 20,
    short: '这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,',
    content: '# test title ## subtitle',
    user_id: 2,
    created_at: timestamp,
    updated_at: timestamp,
  }, {
    id: 3,
    title: 'blog title 3',
    tag: 'tag1',
    count: 14,
    short: '这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,这里是缩略信息,',
    content: '# test title ## subtitle',
    user_id: 1,
    created_at: timestamp,
    updated_at: timestamp,
  }]),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('blogs', {
    id: { [Sequelize.Op.in]: [1, 2, 3] },
  }, {}),
};
