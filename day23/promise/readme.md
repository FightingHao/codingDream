- 多个promise 对象如何只用一条then链， 解决异步问题， 让代码同步执行
 new Promise((resolve, reject) => {
     异步执行的代码，  resolve, reject
     resolve(123)
 })
 每个Promise对象都是可以thenable的
 在then 的函数里
 then(res => res.json())
 res.json() 也是一个Promise
 显示的返回一个Promise对象， 继续执行下去
 不如await 优秀，