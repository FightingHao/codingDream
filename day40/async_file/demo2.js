var fs = require('fs')
var path = require('path')

module.exports = function findLargest(dir, cb) {
  // console.log(fir);
  // 异步
  // 1. 读取目录异步
  // 2. 遍历文件信息
  fs.readdir(dir, (err, files) => {
    if (err) {
      // 如果出错
      // 告诉cb
      return cb(err)
    }
    // 找到最大文件  算法
    // [] 所有文件大小 最大的一个
    var counter = files.length
    var errored = false  // 未出错
    var stats = []
    // foreach 小文件先执行完  大文件后执行完
    files.forEach((file, index) => {
      fs.stat(path.join(dir, file), (err, stat) => {
        if (errored) return
        if (err) {
          errored = true
          return cb(err)
        }
        stats[index] = stat
        // 每次获取文件信息时间不一样
        if (--counter == 0) {
          // 文件stat都获取完
          // 谁最大
          var largest = stats
            .filter(stat => stat.isFile())
            .reduce((prev, next) => {
              if (prev.size > next.size) {
                return prev
              }
              return next
            })

          cb(null, files[stats.indexOf(largest)])
        }
      })
    });
  })
}