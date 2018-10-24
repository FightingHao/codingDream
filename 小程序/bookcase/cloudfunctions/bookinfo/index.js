// 云函数入口文件
const rp = require('request-promise')
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const isbn = event.isbn
  const res = rp('https://api.douban.com/v2/book/isbn/' + isbn)
      .then(html => html)
      .catch(err => console.log(err))
  return res
}