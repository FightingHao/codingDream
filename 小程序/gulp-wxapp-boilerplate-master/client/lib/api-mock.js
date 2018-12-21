import Promise from './bluebird'

export const test2 = () => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: 'http://127.0.0.1:3000/api/test2',
      success: (res) => {
        resolve({result: res.data})
      },
      fail: reject
    })
  })
}
export const test = (data) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: 'http://127.0.0.1:3000/api/test',
      data,
      success: (res) => {
        resolve({result: res.data})
      },
      fail: (e) => {
        reject(e)
      }
    })
  })
}

export const getWeather = (lat, lon) => {
  return new Promise((resolve, reject) => {
    // 因为天气这个第三方服务准备参数好复杂， 交给node去做
    wx.request({
      url: 'http://127.0.0.1:3000/api/he-weather',
      data: {
        lat,
        lon
      },
      success: (res) => {
        resolve({ result: res.data })
      },
      fail: (e) => {
        reject(e)
      }
    })
  })
}