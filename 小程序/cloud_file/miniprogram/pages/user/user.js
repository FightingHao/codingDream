// miniprogram/pages/user/user.js
const db = wx.cloud.database()
const userInfo = db.collection('userInfo')
const photos = db.collection('photos')

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    const openid = options.id
    wx.showLoading({
      title: '数据加载中...'
    })
    userInfo
      .where({
        _openid: openid
      })
      .get()
      .then(userRes => {
        photos
          .where({
            _openid: openid
          })
          .get()
          .then(photoRes => {
            // setData性能消耗高
            this.setData({
              photos: photoRes.data,
              userInfo: userRes.data[0]
            }, () => {
              wx.hideLoading()
            })
          })
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})