// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  // event里可以拿到openID 用户
  // 云函数权限就是超级管理员
  console.log(event)
  return event
}