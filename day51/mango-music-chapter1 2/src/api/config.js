const URL = {
  carousel: "https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",
  /*最新专辑*/
  newalbum: "https://u.y.qq.com/cgi-bin/musicu.fcg"
}

// 请求成功一般为0
const CODE_SUCCESS = 0

const PARAM = {
  // 跨域请求的json json with padding
  format: 'jsonp',
  inCharset: 'utf-8',
  outCharset: 'utf-8',
  notice: 0
}

const OPTION = {
  param: 'jsonpCallback',
  prefix: 'callback'
}

export { URL, CODE_SUCCESS, OPTION, PARAM }