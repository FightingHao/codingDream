const fs = require('fs')

try {
  // const dataA = fs.readFileSync('./a.txt', 'utf8')
  const dataB = fs.readFileSync('./b.txt', 'utf8')
  const dataC = fs.readFileSync('./c.txt', 'utf8')
  const fileAPromise = new Promise((resolve, reject) => {
    fs.readFile('./a.txt', 'utf8', function (err, data) {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })

  const fireBPromise = new Promise((resolve, reject) => {
    fs.readFile('./b.txt', 'utf8', function (err, data) {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })

  const fireCPromise = new Promise((resolve, reject) => {
    fs.readFile('./c.txt', 'utf8', function (err, data) {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })


  Promise
    .all([fileAPromise, fireBPromise, fireCPromise])
    .then(responses => {
      console.log(responses)
    })

} catch (e) {
  console.log('读取文章失败' + e.message)
}