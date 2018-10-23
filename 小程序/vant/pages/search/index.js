// pages/search/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: ''
  },

  onChange(e) {
    this.setData({
      value: e.detail
    })
  },

  onSearch(e) {
    if (this.data.value) {
      wx.showToast({
        title: '搜索:' + this.data.value,
        icon: 'none'
      })
    }
  },

  onCancel(e) {
    wx.showToast({
      title: '取消',
      icon: 'none'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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