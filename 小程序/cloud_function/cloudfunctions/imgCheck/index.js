// 云函数入口文件
const cloud = require('wx-server-sdk')
const AppId = '1257714607'
const SecretId = 'AKID0wkNpHeeYIqCNQOzWs270jGbkhR2v2KY'
const SecretKey = 'ISPCdw2gPI8ua52vc8SbYLTWNPG6kCMM'
const fs = require('fs')
const path = require('path')
const { ImageClient } = require('image-node-sdk')

cloud.init()

let imageClient = new ImageClient({ AppId, SecretId, SecretKey })
// 云函数入口函数
exports.main = async (event, context) => {
  return await imageClient.imgPornDetect({
    formData: {
      image: fs.createReadStream(path.join(__dirname, './test.png'))
    },
    headers: {
      'Content-type': 'multipart/form-data'
    }
  })
}