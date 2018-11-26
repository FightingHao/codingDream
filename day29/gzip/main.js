const http = require('http')
const zlib = require('zlib')
const fs = require('fs')

const server = http.createServer((req, res) => {
  // req 浏览器（用户代理）发送请求
  const acceptEncoding = req.headers['accept-encoding']
  if (acceptEncoding.indexOf('gzip') !== -1) {
    gzip = zlib.createGzip()
    // res 服务器返回响应
    res.writeHead(200, {
      'Content-Encoding': 'gzip',
      'Content-Type': 'text/plain;charset=utf-8'
    })
    fs.createReadStream('./a.txt')
      .pipe(gzip)
      .pipe(res)
  } else {
    fs.createReadStream('./a.txt')
      .pipe(res)
  }
})

server.listen(3000, () => {
  console.log('服务器启动了')
})