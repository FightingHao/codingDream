1. this 由函数调用方式决定
  普通函数 对象的方法 时间处理函数

2. this 作用域手动指定
  call apply 区别是参数 call 逗号序列 apply数组
  bind 可以实现延后执行 返回一个新函数 并且内部的this指定为第一个的参数

3. 手写一个bind
  bind是展示this 闭包这些知识点 函数式编程 原型链最直接的例子
  this:
    - apply
      手动指定函数的执行的this
      bind 是基于apply手动指定this为绑定对象的
    - 闭包区域
      this 由调用方式决定为被绑定过的函数就是this
      self = this 在闭合空间一直存在
  闭包:
    函数嵌套函数 闭包中的变量可以一直被访问
  函数式编程:
    bind 返回一个新函数， 解决了事件函数的this丢失
    一般的事件listen this 指向了事件对象的target 在react 组件式开发或是面向对象有需求
    将事件的处理函数作为组件类的方法， 即延迟调用 同时手动指定this
    apply + 函数式
    return function() {
      self.apply(context)
    }

4. 原型链
  Function.prototype.bind