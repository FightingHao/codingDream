- 组件化
  + Component 构成Page的一块基石 可复用 可定制
  + 小程序自身没有提供的， 我们可以在components文件夹里自定义
  + 可以使用第三方提供的自定义组件
  + vant组件框架 经历了有赞电商团队的检验

- page.json usingComponents 声名要的组件
  + wxml由组件组成

- 有赞vant

- van-search
  + 组件是代表着一堆在其内部的标签或子组件，进行统一的向外提供组件功能
  + 外部， wxml 调用组件
  + 内部， vant 内部， 在使用时， 不用操作
  + 内外交流， props
  + 定制性 show-action use-action-slot

- slot 插槽