// Symbol.iterator
// https://juejin.im/post/5c40484bf265da61171cfb4d
const arr = [1, 2, 3]
const res = arr[Symbol.iterator]()
console.log(res)

console.log(res.next())
console.log(res.next())
console.log(res.next())
console.log(res.next())