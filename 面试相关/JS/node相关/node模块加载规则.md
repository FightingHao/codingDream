## node 采用CommonJS的模块规范

## 模块原理
### export导出规则
> 在 Node 中，每个模块都有自己的`module`对象
> 该`module`对象中，有一个成员叫：`export`，也是一个对象(当然还有其他成员)
> 也就是说如果你需要对外导出成员，只需要把到导出的成员挂载到`module.exports`上
> 我们发现，每次导出接口成员的时候都通过`module.exports.xxx = xxx`的方式，点的层级有点多
> 所以node为了简化操作，专门提供了一个变量`exports`，它等于`module.exports`

```javascript
// node底层
var module = {
  export: {
    foo: 'bar',
    add: function(x, y) {
      // ...
    }
  }
}

// 也就是说在模块中还有一句代码
var exports = module.exports

module.exports.foo = 'bar'
module.exports.add = function(x, y) {
  // ...
}

// exports是module.exports的一个引用
// 可以使用任意一方来导出内部成员
console.log(exports === module.exports) // true

// 直接使用exports赋值的方式导出单个成员是不管用的
exports = 11 // 不管用，改变了引用地址，exports不再指向module.exports

// 默认在代码最后有一句
// 外部模块谁来`require`这个模块，谁就得到`module.exports`
return module.exports
```

### require导入规则
> 优先从缓存加载，避免重复加载，提高模块加载效率
> 判断模块标识 require('模块标识')
  - 核心模块
    > 核心模块本质也是文件
    > 已经被编译到二进制文件中了，我们只需要按照名字来加载就可以了
  - 第三方模块
    > 需要通过npm来下载
    > 先找到当前文件所处目录中的`node_modules`目录
    > 再寻找对应模块xxx
    > 再找到package.json文件
    > 寻找package.json文件中的main属性
    > main属性记录了xxx模块的入口文件
    > 如果package.json文件不存在或者main置指定的入口模块也没有，则node会自动找该目录下的index.js做入口文件
    > 也就是说index.js会作为一个默认备选项
    > 如果以上所有条件都不成立，则会进入上一级目录中的`node_modules`目录中查找
    > 如果上一级还没有，则会继续往上上一级查找，直到当前磁盘根目录
    > 如果最后都没有查找到，则会报错：cannot find module xxx
  - 自己写的模块
    > 通过路径的形式来加载
    > ./ 本级目录
    > ../ 上级目录
    > / 当前文件模块所属磁盘的根路径