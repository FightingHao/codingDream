Page({
  scanCode: function () {
    wx.scanCode({
      onlyFromCamera: false,
      scanType: ['barCode'],
      success: res => {
        /* wx.showToast({
          title: JSON.stringify(res.data)
        }) */
        console.log(JSON.stringify(res), res)
        wx.cloud.callFunction({
          name: 'bookinfo',
          data: {
            isbn: res.result
          },
          success: res => {
            console.log(res)
            const bookString = res.result
            const db = wx.cloud.database()
            db.collection('mybook')
                .add({
                  data: JSON.parse(bookString)
                })
                .then(res => {
                  console.log(res)
                })
                .catch(err => {
                  console.log(err)
                })
          }
        })
      }
    })
  }
})