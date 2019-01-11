const Joi = require('joi');

// /blogs?page=2&limit=10
const paginationDefine = {
  limit: Joi.number().required().min(1).max(30).description('限制返回的数量,默认15'),
  page: Joi.number().integer().min(1).required().description('当前页码，默认为1'),
  pagination: Joi.boolean().required().description('是否开启分页')
}

module.exports = {
  paginationDefine
}
