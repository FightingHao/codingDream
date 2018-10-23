// 云能力初始化
wx.cloud.init({
  // 传入字符串形式的环境 ID 可以指定所有服务的默认环境
  env: 'zhh-cloud-b7a1a9',
  // 是否在将用户访问记录到用户管理中，在控制台中可见
  traceUser: true
})

const db = wx.cloud.database({
  env: 'zhh-cloud-b7a1a9'
})
const productsCollection = db.collection('products')
const _ = db.command

Page({
  onPullDownRefresh: function () {
    productsCollection.get().then(res => {
      this.setData({
        products: res.data
      }, () => {
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