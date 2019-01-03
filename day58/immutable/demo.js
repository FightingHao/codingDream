let obj1 = { a: 1, b: 2, c: 3 }
let obj2 = obj1

obj2.a = 3

console.log(obj1.a)
console.log(obj1 === obj2)
