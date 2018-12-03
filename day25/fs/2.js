const fs = require('fs')
const path = require('path')
// 遍历目录及其子目录， 把文件输出

const getFilesInDir = function (dir) {
  var results = [path.resolve(dir)]
  var files = fs.readdirSync(dir, 'utf8')
  console.log(files)
  files.forEach(file => {
    file = path.resolve(dir, file)
    const stats = fs.statSync(file)
    // console.log(stats)
    if (stats.isFile()) {
      results.push(file)
    } else {
      results = results.concat(getFilesInDir(file))
    }
  })
  return results
}
const files = getFilesInDir('./src')

console.log(files)