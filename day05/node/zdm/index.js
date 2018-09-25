const request = require('request')
const cheerio = require('cheerio')

request('https://www.smzdm.com/youhui/', (err, req) => {
  if (!err) {
    var body = req.body
    // console.log(body)
    // cheerio 将内存中的html模拟浏览器的方式来渲染网页
    var $ = cheerio.load(body, {
      // 是否将html中实体转换为字符
      decodeEntities: false
    })
    $('.list.list_preferential').each((i, item) => {

      // 通过$ 类似jQuery的dom操作爬取节点信息
      var $title = $('.itemName a', item)
      var url = $title.attr('href')
      var title = $title.html()
      console.log(url, title)

      var h1 = $title.children().text().trim()
      var img = $('img', item).attr('src')
      var desc = $('.lrInfo', item).html().trim()
      var mall = $('.botPart a.mall', item).html().trim()
      console.log(title, h1, url, img, desc, mall)

    })
  }
})

/*
1.npm init -y /yarn init -y    ---初始化项目，生成默认的package.json配置文件
2.yarn global add request     ---yarn安装模块
3.yarn global add nodemon     ---yarn安装模块
4.nodemon index.js      ---启动服务器js脚本，并可以自动更新
5.yarn add cheerio      ---添加模块依赖
6.极客时间
*/