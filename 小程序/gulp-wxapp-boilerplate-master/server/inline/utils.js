const path = require('path')
// 哈希运算
const crypto = require('crypto')

const KEY = '87c3c01b382d4fa3900f47ec560b28b9'
const USER_ID = 'HE1811232056301825'
const $ = {
  generateSignature: (params) => {
    params.username = USER_ID
    let data =
      Object.keys(params)
        .filter((key) => {
          return params[key] !== '' && key !== 'sign' && key !== 'key'
        })
        .sort()
        .map((key) => {
          return `${key}=${params[key]}`
        })
        .join('&') + KEY
    return crypto.createHash('md5').update(data).digest('base64')
  }
}

module.exports = $