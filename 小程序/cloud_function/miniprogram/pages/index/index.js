Page({
  // 云函数是独立的node环境， 新建， 安装依赖， 上传
  // 云开发能力
  http() {
    // 云函数的执行异步的 main函数 async 在这个函数内部将发生费时的事情 ajax, 文件上传
    // 同步写法
    wx.cloud.callFunction({
      name: 'http',
      data: {
        a: 1
      }
    }).then(res => {
      // console.log(JSON.parse(res.result))
      console.log(res.result)
    })
  }
})