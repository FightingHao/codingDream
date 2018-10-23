// miniprogram/pages/add/add.js

const db = wx.cloud.database()
const productsCollection = db.collection('products')

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  addData(e) {
    console.log(db, productsCollection)
    // product对象 => products mongodb no-sql 文档数据库
    // sql-server 关系型数据库
    productsCollection.add({
      data: {
        title: 'product ' + (Math.random() * 100).toString(),
        image: 'https://developers.weixin.qq.com/miniprogram/dev/image/cat/0.jpg?t=18100816',
        tags: ['tag123', 'tag23'],
        price: (Math.random() * 100).toFixed(2),
        color: 'blue',
        view: Math.floor(Math.random() * 10)
      }
    }).then(res => {
      console.log(res)
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