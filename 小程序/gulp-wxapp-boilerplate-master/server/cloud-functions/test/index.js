//云函数
/*
    云函数部署：
     一. 在管理台新建一个 名为 test 的云函数，进行函数配置编辑
     二.部署云函数
        请在微信开发者工具中上传云函数代码，指引：
        1. 请先配置云函数的根目录（如已配置请忽略此步骤）
            a. 在项目文件project.config.json 里增加字段 "cloudfunctionRoot": "./functions"
            b. 在微信开发者工具中重新载入项目，即可看到带有云标记的云函数目录
        2. 在微信开发者工具中，右击云函数test目录，选择‘上传并部署’，即可同步至云端
*/

// 支持引入共同模块
/*<jdists import="../../inline/utils.js" />*/

// 这个云函数将传入的 a 和 b 相加返回

exports.main = async (event) => {
  let {a, b} = event
  return new Promise((resolve, reject) => {
    resolve({result: parseInt(a) + parseInt(b)})
  })
}
