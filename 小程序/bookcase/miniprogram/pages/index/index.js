//index.js
// 云开发的时代，服务器没有实指，动态分配，动态扩容
// 数据库是mongodb database sdk get() where() update()
const db = wx.cloud.database()
const book = db.collection('mybook')
const _ = db.command
const app = getApp()

Page({
  data: {
    book_list: []
  },

  onLoad: function (options) {
    // 数据库sql select * from mybook 关系型
    // mongodb nosql db.find({})
    db.collection('mybook').get({
      success: res => {
        this.setData({
          book_list: res.data
        })
        console.log(res)
      }
    })
  }
})
