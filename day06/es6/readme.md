- this 指针
  + 函数的运行方式有关
    - 作为事件处理函数，this指向事件发生的对象
    - 是箭头函数this指向父级的this
    - 普通函数，this指向全局 window(前) global(后)
    - 作为对象的方法被执行， this指向对象

- JS 数据类型
  + 基础类型
    - 数值型
    - 字符串
    - 布尔值
    - undefined
    - null
    - Symbol

  + 复杂(引用)数据类型
    - Object
      + 数组
      + 对象字面量
      + 函数

  + typeof 不能区分Object
  + Object.prototype.toString.call(variable)

- transition

- classList
  + contains
  + add
  + remove
  + toggle

