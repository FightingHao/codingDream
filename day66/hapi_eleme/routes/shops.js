const GROUP_NAME = 'shops'
const models = require('../models')

module.exports = [
  {
    method: 'GET',
    path: `/${GROUP_NAME}`,
    handler: async (request, reply) => {
      const results = await models.shops.findAll()
      reply(results)
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '获取店铺列表'
    }
  },
  /* {
    method: 'GET',
    path: `${GROUP_NAME}/{shopId}/goods`,
    handler: async (request, reply) => {
      reply()
    },
    config: {
      tags: ['api', 'tests'],
      description: '获取店铺的商品列表'
    }
  } */
]