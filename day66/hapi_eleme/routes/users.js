const GROUP_NAME = 'users';
const axios = require('axios');
const Joi = require('joi');
const config = require('../config');
const models = require('../models');

module.exports = [
  {
    method: 'POST',
    path: `/${GROUP_NAME}/wxLogin`,
    handler: async (req, reply) => {
      // console.log(req);
      const appid = config.wxAppid;
      const secret = config.wxSecret;
      const { code, encryptedData, iv } = req.payload;
      console.log(code, encryptedData, iv);
      const response = await axios({
        url: 'https://api.weixin.qq.com/sns/jscode2session',
        method: 'GET',
        params: {
          appid,
          secret,
          js_code: code,
          grant_type: 'authorization_code'
        }
      });
      const { openid, session_key: sessionKey } = response.data;
      console.log(openid, sessionKey);
      const userInfo = await models.users.findOrCreate({
        where: { open_id: openid }
      });
      reply('fdff');
    },
    config: {
      tags: ['api', GROUP_NAME],
      validate: {
        payload: {
          code: Joi.string().required().description('微信用户登录的临时code'),
          encryptedData: Joi.string().required().description('微信用户信息encryptedData'),
          iv: Joi.string().required().description('微信用户信息iv')
        }
      }
    }
  }
];
