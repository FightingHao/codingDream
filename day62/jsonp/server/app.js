const Koa = require('koa')
const app = new Koa() // 后端应用
const router = require('koa-router')()

// 前端MVVM 后端MVC
router.get('/api', (ctx) => {
  const data = {
    name: 'haohao',
    age: 18
  }
  ctx.body = JSON.stringify(data)
})

// koa 实现是middlewares compose
app.use(router.routes());
app.listen(3000);