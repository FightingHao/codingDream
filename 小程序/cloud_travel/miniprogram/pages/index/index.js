wx.cloud.init()

const db = wx.cloud.database()

Page({
  data: {
    ads: [],
    item: {
      user: {
        avatar: '',
        nickName: '豪豪',
        summary: '哈哈哈'
      }
    }
  },
  onLoad() {
    db.collection('ads')
      .get({
        success: res => {
          this.setData({
            ads: res.data
          })
          // 复杂用云
          wx.cloud.callFunction({
            name: 'getTravelInfo',
            data: {
              count: 5,
              startIndex: 0
            },
            success: res => {
              console.log(res)
            }
          })
        }
      })
  }
})