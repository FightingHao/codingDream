const redis = require('../../redis')
module.exports = (GROUP_NAME, options) => ({
  method: 'GET',
  path: `/${GROUP_NAME}`,
  handler: async (request, reply) => {
    const { limit, page } = request.query;
    const offset = (page - 1) * limit;
    // reply(limit, page, offset);
    let { client, getAsync, setAsync } = redis(request)
    // mysql有IO压力，用户量一大，不做缓存是不行的
    // redis 或早期的memorycache 来做内存数据库 读取数据快 没有IO压力
    // 取数据 redis(key) 有吗? 有就直接返回 没有的话 mysql set redis

    console.log(offset);
    
    const redisResName = `postlimit${limit}offset${offset}`
    const redisRes = await getAsync(redisResName)
    console.log(redisRes);
    if (redisRes) {
      reply(JSON.parse(redisRes))
    } else {
      const { rows: results, count: totalCount } = await options.models.blogs.findAndCountAll({
        limit,
        offset
      });
      await setAsync(redisResName, JSON.stringify(results, totalCount))
      client.EXPIRE(redisResName, 50)
      reply({ results, totalCount });
    }
  },
  config: {
    tags: ['api', GROUP_NAME],
    description: '获取文章列表',
    validate: {
      query: {
        ...options.paginationDefine
      }
    }
  }
})
