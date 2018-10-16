/* var str = 'Visit Microsoft!'

console.log(str.replace('Microsoft', 'alibaba'))

var money = '$asdf$sfasd$'


console.log(money.replace(/\$/g, '￥')) */

let html = `abc{{username}}asffa`

let reg = /\{\{(.*)\}\}/gm
console.log(html.replace(reg, RegExp.$1));


