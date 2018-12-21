wepy-cli 微信官方MVVM框架， 开发中大型小程序项目
wepy init standard wepy-shop
standard 项目模板 wepy-shop项目
进入项目 安装依赖 npm run dev 跑起来
dev 开发状态的跑起来

MVVM 思想
1. 页面级别组件， 父组件， 子组件
  数据归页面级别负责， 数据单向绑定{{}}流动， 传给子组件， 方便管理数据， 以及维护数据状态

2. 父子组件数据传递及事件反馈
  props sync
  emit
