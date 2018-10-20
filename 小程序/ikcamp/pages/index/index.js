//index.js
//获取应用实例
import config from "../../utils/config";
console.log(config.defaultBarTitle);


const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    articleList: [],
    days: 3,
    page: 1,
    pageSize: 4,
    totalSize: 0,
    hasMore: true,
    hiddenLoading: false
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  requestArticle: function () {
    wx.request({
      url: 'https://www.easy-mock.com/mock/5bca9245e6742c1bf8220bcd/ikcamp/list#!method=get',
      success: (res) => {
        console.log(res)
        let list = this.data.articleList
        list = [...list, ...res.data.data]
        // list.push(res.data.data[this.data.page - 1])
        this.setData({
          hiddenLoading: true,
          articleList: list
        })
      }
    })
  },

  showDetail(e) {
    let dataset = e.currentTarget.dataset
    let item = dataset && dataset.item
    let contentId = item.contentId || 0
    wx.navigateTo({
      url: `../detail/detail?contentId=${contentId}`
    })
  },

  onLoad: function () {
    this.requestArticle()
    wx.setNavigationBarTitle({
      title: config.defaultBarTitle
    })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onReachBottom() {
    if(this.data.hasMore) {
      let nextPage = this.data.page + 1
      this.setData({
        page: nextPage
      })
      this.requestArticle()
    }
  }
})
