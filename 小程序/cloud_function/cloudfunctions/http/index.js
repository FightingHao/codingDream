// require + module.exports  js模块化 commonJS
// import xxx from "module"  export default  es6模块化方式

// 云函数入口文件
const cloud = require('wx-server-sdk')
const got = require('got')


cloud.init()

const db = cloud.database()
// 云函数入口函数
// async 同步 是函数修饰符, es7, 让异步的代码同步化
exports.main = async () => {
  // 费时, 异步的, 但是想保持执行的顺序和阅读的顺序
  let getResponse = await got('httpbin.org/get')
  console.log(getResponse)
  let postResponse = await got('httpbin.org/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: '这是标题',
      value: 123
    })
  })
  console.log(postResponse.body)
  // await 让我们的代码等待一下 只有async 才可以用

  // await 在map中不起作用
  /*const photos = await db.collection('photos').get()
    let photoInfos = [];

    photoInfos = photos.data.map((item, index) => {
      let openid = item._openid
      const user = db.collection('userInfo').where({
        _openid: openid
      }).get()
      if (user.data.length > 0) {
        item.user = user.data[0]
      }
      return item
    }) */
  const photoInfos = [];
  const photos = await db.collection("photos").get();
  console.log(photos);
  for (let i = 0; i < photos.data.length; i++) {
    const photo = photos.data[i];
    let openid = photo._openid;
    const user = await db.collection('userInfo').where({
      _openid: openid
    }).get();
    if (user.data.length > 0) {
      photo.user = user.data[0]
    }
    photoInfos.push(photo);
  }
  return photoInfos;

}