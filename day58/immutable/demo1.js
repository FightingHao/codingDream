const Immutable = require('immutable')

let obj1 = Immutable.Map({ a: 1, b: 2, c: 3 }) // prevState
let obj2 = obj1 // nextState
console.log(obj1 == obj2);
console.log(obj1, obj2);

obj2 = obj2.set('b', 4)
console.log(obj1 == obj2);
console.log(obj1, obj2)
// 传统的引用式赋值就不惜那个， 深拷贝或浅拷贝来处理