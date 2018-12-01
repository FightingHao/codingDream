1. babel  class 编译<br>
  .babelrc 不可少 presets数组 env<br>
  - js 面向对象是原型式的 es5<br>
  function Person() {} 构造函数<br>
  Person.prototype = {}<br>
  es6 class constructor 只不过是语法糖而已<br>
  - es5的构造函数可以作为普通函数来执行<br>
    class es6 babel 编译时杜绝？<br>

  - es6的prototype属性不可枚举enumerable
    Object.keys()
    Object.getOwnPropertyNames(Person.prototype)
