Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
  },
  userNameInput(e) {
    this.setData({
      username: e.detail.value
    })
  },
  toInfo() {
    let isNav = false
    if (this.data.username) {
      wx.showToast({
        title: '数据加载中',
        icon: 'loading',
        duration: 1000
      })
    } else {
      wx.showModal({
        title: '请输入用户名',
        showCancel: false,
        success: function (res) {
        }
      })
    }

    wx.setStorage({
      key: 'username',
      data: this.data.username
    })

    setTimeout(() => wx.switchTab({
      url: '../index/index'
    }), 1000);
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