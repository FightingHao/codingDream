const { promisify } = require('util')

module.exports = (request) => {
  const { client } = request.server.plugins['hapi-redis']
  const getAsync = promisify(client.GET).bind(client)
  const setAsync = promisify(client.SET).bind(client)
  return {
    client,
    getAsync,
    setAsync
  }
}