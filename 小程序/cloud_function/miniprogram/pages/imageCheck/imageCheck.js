Page({
  imgCheck() {
    wx.cloud.callFunction({
      name: 'imgCheck'
    }).then(res => {
      // console.log(JSON.parse(res.result.body))
      console.log(res)
    })
  }
})