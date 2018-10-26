const db = wx.cloud.database()
const userInfo = db.collection('userInfo')

Page({
  data: {
    userList: []
  },
  getUserInfo(result) {
    console.log(result)
    wx.cloud.callFunction({
      name: 'getOpenId',
      complete: res => {
        let openid = res.result.openId
        userInfo
          .where({
            _openid: openid
          }).count()
          .then(res => {
            console.log(res)
            if (res.total == 0) {
              userInfo
                .add({
                  data: result.detail.userInfo
                })
                .then(res => console.log(res))
            } else {
              wx.showToast({
                title: '不能重复加'
              })
            }
          })
        console.log(res)
      }
    })
  },

  onLoad() {
    userInfo
      .get()
      .then(res => {
        this.setData({
          userList: res.data
        })
      })
  },

  onShareAppMessage(res) {
    return {
      title: '分享',
      path: '/pages/index/index',
      imageUrl: 'https://7a68-zhh-cloud-b7a1a9-1257892988.tcb.qcloud.la/664755.png?sign=e0df868e67168001f6e30d2c2c19efa2&t=1540478174',
      success: res => {
        console.log('转发成功')
      },
      fail: res => {
        console.log('转发失败')
      }
    }
  }
})