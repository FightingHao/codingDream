const Promise = require('./promise.js')
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(11)
    resolve('执行了A')
  }, 1000);
})

p
  .then(data => {
    console.log(data)
  }, err => {
    console.log(err)
  })