const inert = require('inert') // hapi静态文件或目录
const vision = require('vision') // hapi专用模板显示npm
const packageModule = require('package') // 拿到package.json
const hapiSwagger = require('hapi-swagger')

module.exports = [
  inert,
  vision,
  {
    register: hapiSwagger,
    options: {
      info: {
        title: '接口文档',
        version: packageModule.version
      },
      grouping: 'tags',
      tags: [
        {
          name: 'tests',
          description: '测试相关'
        }
      ]
    }
  }
]