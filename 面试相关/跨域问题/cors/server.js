const express = require('express')
const app = express()

const whiteList = [
  'http://127.0.0.1:8080',
  'http://localhost:8080'
]

app.use(express.static(__dirname))
app.use((req, res, next) => {
  const { origin } = req.headers

  if (whiteList.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin) // 允许异源请求
    res.setHeader('Access-Control-Allow-Headers', 'name') // 携带请求头
    res.setHeader('Access-Control-Allow-Methods', 'PUT') // 支持PUT请求
    res.setHeader('Access-Control-Allow-Credentials', true) // 携带cookie
    res.setHeader('Access-Control-Max-Age', 6000) // 设置OPTIONS请求相应空
    res.setHeader('Access-Control-Expose-Headers', 'name') // 返回安全属性
    if (req.method === 'OPTIONS') {
      res.end()
    }
  }
  next()
})

app
  .get('/data', (req, res) => {
    console.log(req.headers)
    res.end('hello')
  })
  .put('/data', (req, res) => {
    console.log(req.headers)
    res.setHeader('name', 'zhh')
    res.end('hello')
  })
  .post('/data', (req, res) => {
    console.log(req.headers)
    res.end('hello')
  })
  .listen(3000)