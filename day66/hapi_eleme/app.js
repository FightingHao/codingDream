const Hapi = require('hapi')
const server = new Hapi.Server()
const routesHelloHapi = require('./routes/hello-hapi')
require('env2')('./.env')
const config = require('./config')

server.connection({
  port: config.port,
  host: config.host
})

const init = async () => {
  server.route([
    ...routesHelloHapi
  ])

  await server.start()
  console.log(`Server running at: ${server.info.uri}`)

}

init()