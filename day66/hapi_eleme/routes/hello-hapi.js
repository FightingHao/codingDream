module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      reply('hapi')
    },
    config: {
      tags: ['api', 'tests'],
      description: '测试hello-hapi'
    }
  }
]