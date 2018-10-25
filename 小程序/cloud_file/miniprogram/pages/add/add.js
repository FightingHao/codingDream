// miniprogram/pages/add/add.js
const db = wx.cloud.database()
const photos = db.collection('photos')

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  upload() {
    wx.chooseImage({
      count: 4,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: res => {
        console.log(res)
        const tempFilePaths = res.tempFilePaths
        for (let i = 0; i < tempFilePaths.length; i++) {
          // 取个不会重复的文件名
          let randString = Math.floor(Math.random() * 1000000) + '.png'
          wx.cloud.uploadFile({
            // 指定上传到的云路径
            cloudPath: randString,
            // 指定要上传的文件的小程序临时文件路径
            filePath: tempFilePaths[i],
            success: res => {
              console.log(res)
              photos.add({
                data: {
                  image: res.fileID
                }
              }).then(res => {
                wx.showToast({
                  title: '上传成功',
                  icon: 'success'
                })
              })
            },
            fail: err => console.log('111111' + err)
          })
        }
      }
    })
  }
})