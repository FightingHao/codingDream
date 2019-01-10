const env = process.env
console.log(env)

module.exports = {
  port: env.PORT,
  host: env.HOST,
  wxAppid: env.WX_APPID,
  wxSecret: env.wx_SECRET
}