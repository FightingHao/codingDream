为了封装性， 易用性， 代码的可读性， 将弹幕的业务逻辑(独立)封装成一个类， 并将其模块化
直接在浏览器端引入， 浏览器目前还没有支持
async 最近版本，syntax
使用babel
webpack

webpack-dev-server
entry: 入口引入更深层次的文件
module test loader
output(出口)

- canvas 的业务逻辑模式
  render() 负责一直画
  递归 requestAnimationFrame()
  renderBarrage()
  clearRect(0, 0, w, h)

- barrage 集合
  render()


- 代码的思想
  面向对象  对象的职责和分工
  容器对象 canvas video data render(递归+x 更新) 负责一直画 constructor 生成barrage的集合
  业务细节对象 data item属性 render() 负责画出文字 constructor