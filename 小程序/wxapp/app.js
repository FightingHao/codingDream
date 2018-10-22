const app = getApp()

App({
  onLaunch() {
    console.log('应用启动')
    wx.request({
      url: 'https://www.easy-mock.com/mock/5bca9245e6742c1bf8220bcd/ikcamp/video#!method=get',
      success: response => {
        /* const {slides, vehicles, stories} = response.data
        console.log(slides, vehicles, stories)
        this.globalData.slides = slides
        this.globalData.vehicles = vehicles
        this.globalData.stories = stories */
        Object.assign(this.globalData, response.data)
      }
    })
  },
  // 全局的数据  App.js是全局的
  // 用户的登录状态
  globalData: {
  }
})