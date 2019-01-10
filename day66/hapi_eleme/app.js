const Hapi = require('hapi')
const server = new Hapi.Server()
const routesHelloHapi = require('./routes/hello-hapi')
const routesShops = require('./routes/shops')
const routesUsers = require('./routes/users')
const pluginHapiSwagger = require('./plugins/hapi-swagger')
require('env2')('./.env')
const config = require('./config')

server.connection({
  port: config.port,
  host: config.host
})

const init = async () => {
  await server.register([
    ...pluginHapiSwagger
  ])

  server.route([
    ...routesHelloHapi,
    ...routesShops,
    ...routesUsers
  ])

  await server.start()
  console.log(`Server running at: ${server.info.uri}`)

}

init()