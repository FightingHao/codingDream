执行npx命令
node_modules -> .bin -> webpack.cmd -> webpack\bin\webpack.js -> 找package.json下的main入口 -> lib/webpack.js

## webpack 打包后的js
```javascript
(function(modules) {
  var installedModules = {} // 定义一个缓存
  /*
    installedModules大致为
    key为入口模块名 './src/index.js'
    value为 一个配置对象

    ./src/index.js: {
      i: moduleId,
 			l: false,
 			exports: {}
    }
  */

  // 实现一个require方法
  function __webpack_require__(moduleId) { // "./src/index.js"入口模块传入
    // 检查模块是否再缓存中
    if(installedModules[moduleId]) {
 			return installedModules[moduleId].exports;
    }

    // 不在的话就创建缓存关系
    // 向installedModules缓存对象中添加属性
    // key为入口模块名 './src/index.js'
    // value为 一个配置对象{
    //  i: moduleId,
 		//  l: false,
 		//  exports: {}
    // }
 		var module = installedModules[moduleId] = {
 			i: moduleId,
 			l: false,
 			exports: {}
 		};

    // 从参数对象中找到名字并执行方法 然后一层一层嵌套调用__webpack_require__方法
 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

 		module.l = true;

 		return module.exports;
  }

  return __webpack_require__(__webpack_require__.s = "./src/index.js") // 返回并调用__webpack_require__函数，传入入口模块
})({
  key: value
})
```

- 打包后是一个立即执行函数
- 传的参数是一个对象
  - 对象的key: 是当前模块的路径
  - 对象的value: 也是一个立即执行函数
- 定义一个`installedModules`缓存对象
  - 缓存的作用：当一个模块加载完成后，不用再加载，直接从缓存中拿
- 实现一个`require`方法叫`__webpack_require__`，因为浏览器不支持`CommonJs`规范