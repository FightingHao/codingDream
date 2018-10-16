// MVVM

const html = `
  <view>
    <text>{{username}}</text>
  </view>
`

let obj = {
  username: 'hao'
}

// 在模板中，查找{{key}}
// 替换成 username 变量的值 replace
function compile(html) {
  let reg = /\{\{(.*)\}\}/gm
  if (reg.test(html))
    return html.replace(reg, obj[RegExp.$1]);
}

const compileHTML = compile(html)

console.log(compileHTML);
