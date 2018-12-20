var fetch = require('node-fetch')

function* gen() {
  var url = 'https://api.github.com/users/github'
  var result = yield fetch(url)
  console.log(result.bio)
}

var genG = gen()
// console.log(genG.next())
// console.log(genG.next({bio: '手持利剑，学好JS闯天涯'}))
var result = genG.next()
console.log(result)
result.value
  //从二进制变为json  json化
  .then(data => data.json())
  .then(data => {
    // console.log(data)
    genG.next(data)
  })