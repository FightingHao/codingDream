wx.cloud.init({
  env: 'zhh-cloud-b7a1a9'
})

const db = wx.cloud.database()
const productsCollection = db.collection('products')
const _ = db.command

Page({
  onPullDownRefresh: function () {
    productsCollection.get().then(res => {
      this.setData({
        products: res.data
      }, res => {
        console.log('数据更新完成')
        wx.stopPullDownRefresh()
      })
    })
  },
  onReachBottom: function () {
    console.log('上拉加载更多')
  },
  data: {
    page: 1,
    products: []
  },
  onLoad: function () {
    productsCollection
      .get()
      .then(res => {
        this.setData({
          products: res.data
        })
        console.log(res.data)
      })
  },
  click: function (event) {
    // update view + 1 doc  一条记录
    // database<-collection<-document
    productsCollection
        .doc(event.currentTarget.dataset.id)
        .update({
          data: {
            view: _.inc(1)
          }
        })
  }

})