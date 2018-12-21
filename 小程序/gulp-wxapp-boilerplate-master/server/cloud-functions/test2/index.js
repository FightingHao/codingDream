// 这个云函数从知乎提取数据

const request = require('request')
const cheerio = require('cheerio')
// 支持引入共同模块
/*<jdists import="../../inline/utils.js" />*/

exports.main = async (context) => {
  console.log(context)
  console.log(request)

  return new Promise((resolve, reject) => {

    request({
      url: 'https://www.zhihu.com/',
    }, (err, resp) => {

      var $ = cheerio.load(resp.body)
      var titles = []
      
      $('[data-za-detail-view-element_name="Title"]').each(function() {
        titles.push($(this).text())
      })

      resolve({
        openid: context.userInfo.openId,
        titles,
      })
    })

  })

}
