const fs = require('fs')
const path = require('path')
const dir = './src'

fs.readdir(dir, (err, files) => {
  // console.log(err, files);
  if(err) {
    console.error()
    return
  }

  files.forEach(file => {
    // stat 返回文件状态
    fs.stat(path.join(dir, file), (err, stat) => {
      console.log(stat.isFile())
    })
  })
})