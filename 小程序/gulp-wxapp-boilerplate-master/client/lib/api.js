// 填写 env
const QQ_MAP_KEY = 'PBBBZ-QFBRV-T7XP4-ULLXL-K6RT6-3VB7Z'

wx.cloud.init({
  env: ''
})


export const test = () => {
  return wx.cloud.callFunction({
    name: 'test',
    data: {
      a: 1,
      b: 3
    }
  })
}

export const test2 = () => {
  return wx.cloud.callFunction({
    name: 'test2'
  })
}

export const geocoder = (lat, lon, success = () => { }, fail = () => { }) => {
  return wx.request({
    url: 'https://apis.map.qq.com/ws/geocoder/v1/',
    data: {
      location: `${lat},${lon}`,
      key: QQ_MAP_KEY,
      get_poi: 0
    },
    success,
    fail
  })

}
