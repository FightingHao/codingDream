const http = require('http')
const fs = require('fs')
const querystring = require('querystring')
const infos = {
  "123": {
    username: 'aaa',
    sex: 'man'
  },
  "456": {
    username: 'bbb',
    sex: 'man'
  }
}

// web server
const server = http.createServer((req, res) => {
  if(req.url === '/rhino.png') {
    const png = fs.readFileSync('./rhino.png')
    res.statusCode = 200
    res.setHeader('Content-Type', 'image/png')
    res.end(png)
    return;
  }

  if(req.url.indexOf('/getInfo') >= 0) {
    const qs = req.url.split('?')[1]
    const params = querystring.parse(qs)
    const id = params.id

    const info = infos[id] || {}

    res.statusCode = 200
    res.end(JSON.stringify(info))
    return;
  }

  const index = fs.readFileSync('./index.html', 'UTF8')
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end(index)
})

// addEventListener
server.listen(3000, () => {
  console.log('服务器开启..')
})