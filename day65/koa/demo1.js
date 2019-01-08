const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const fs = require('fs')
var router = new Router()

// ctx 上下文环境
const about = ctx => {
  // ctx.response.type = 'html'
  // // ctx.response.body = 'hello'
  // ctx.response.body = fs.createReadStream('./teample.html')
  // web server 支持html 路由

  /* if (ctx.request.path !== '/') {
    ctx.response.type = 'html'
    ctx.response.body = '<a href="/">Index page</a>'
  } else {
    ctx.response.body = 'hello'

  } */

  ctx.response.type = 'html'
  ctx.response.body = '<img src="https://www.baidu.com/img/bd_logo1.png?where=super">'

}

const main = ctx => {
  ctx.response.body = 'hello'
}

router
  .get('/', main)
router
  .get('/about', about)

// template.html V层  main C层
app
  .use(router.routes())
  .use(router.allowedMethods())
app.listen(3000)