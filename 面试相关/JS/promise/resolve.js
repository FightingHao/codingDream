// Promise.resolve(value)
// 类方法，该方法返回一个以 value 值解析后的 Promise 对象
// 1、如果这个值是个 thenable（即带有 then 方法），返回的 Promise 对象会“跟随”这个 thenable 的对象，
//    采用它的最终状态（指 resolved / rejected / pending / settled）
// 2、如果传入的 value 本身就是 Promise 对象，则该对象作为 Promise.resolve 方法的返回值返回。
// 3、其他情况以该值为成功状态返回一个 Promise 对象。
var res = Promise.resolve(1)
console.log(res)
res.then(data => {
  console.log(data);
})