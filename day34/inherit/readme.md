1. js 本没有类， 只有对象
将对象的prototype 指向要继承的对象

2. prototype 是函数的属性

3. 继承三步
  - 父类的构造函数执行一下， 相当于super()
  - prototype属性指向父类的实例
  - 将prototype.constructor 指向构造函数

4. 类 Parent 三部分
  - 构造函数 new Fn() { }
  - 构造函数 prototype 属性 方法 对象沿着原型链去找方法
  - 构造函数和原型链有联系的

5. typeof
  typeof 其实复杂数据只有function 和 object 是语法原生支持的， 其它都是变种而与
  function 半边天 prototype半边天
  Function VS Object
  一等对象
  可以被执行的对象
  可以当作Object的构造函数

6. prototype 属性只属于函数
  __proto__ 函数或方法都有此属性
  一个对象A的__prototype__属性指向那个对象B， B就是A的原型对象(父对象)
  A拿到B里所有的属性和方法， 也可以拿到B的原型对象C上的属性和方法， 以此递归 所谓原型链