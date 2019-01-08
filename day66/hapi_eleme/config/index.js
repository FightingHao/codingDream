const env = process.env
console.log(env)

module.exports = {
  port: env.PORT,
  host: env.HOST
}