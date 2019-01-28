- Object.keys() && Object.getOwnPropertyNames()
  这两个方法很相似，都是用来遍历对象(数组)的属性名(索引)，并返回一个字符串数组，值得注意的是，这些属性名都是对象自身的所有的(非继承的)
  区别：
    - Object.keys() 只返回可枚举的属性(symbol类型属性除外)
    - Object.getOwnPropertyNames() 还能返回不可枚举的属性名(symbol类型属性除外)


目前，有四个操作会忽略enumerable为false的属性。
- for...in循环：只遍历对象自身的和继承的可枚举的属性。
- Object.keys()：返回对象自身的所有可枚举的属性的键名。
- JSON.stringify()：只串行化对象自身的可枚举的属性。
- Object.assign()： 忽略enumerable为false的属性，只拷贝对象自身的可枚举的属性。

ES6 规定，所有 Class 的原型的方法都是不可枚举的。

属性的遍历一共有5种：
 
- for...in循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）。
- Object.keys返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名。
- Object.getOwnPropertyNames返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。
- Object.getOwnPropertySymbols返回一个数组，包含对象自身的所有 Symbol 属性的键名。
- Reflect.ownKeys返回一个数组，包含对象自身的所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举。