- 小程序
  + 内嵌在微信超级App，是WebView + 微信一些App插件的混合
  + WebView App 内嵌页面技术 让App开发使用上Web技术， 比Android/IOS更快
  + 缺点是性能慢
  + 在拍超，tabbar, navigationbar 等一些关键的地方又能调用原生微信里的原生组件，提升性能
  + WXML 没有div => view
  + WXSS 使用弹性布局
  + js MVVM

- 架构
  + 小程序的架构是极其简单的
  + app.js 入口文件
  + app.json 项目的配置文件
  + pages 找到所有的页面
    1. 注册所有文件
    2. window 设置 App名字， navigationBar背景色 文字色
    3. tabbar 如果app 需要底栏
  + pages 小程序由页面组成 主要代码
    1. wxml 写结构
    2. wxss 样式
    3. js 写逻辑
    4. json 文件 页面级别

- 组件
  + 小程序提供了很多内置功能组件
  + 组件：具有特定功能效果的代码集合
  + swiper 声明式组件
  + swiper>swiper-item
  + indicator-dots='{{true}}'

- 数据驱动的界面
  + 界面， 数据  传统做法是分别由前端，后端独立做的
  + 大前端让静态界面活起来，界面将直接绑定数据
  + {{}}界面模板
  + 小程序为数据绑定提供了约定
    ```
    Page({
      data: {
        数据区域 => {{}}
      }
    })
    ```
- 指令
  + block
  + wx:for 循环输出指令

- rpx
  + 相对单位，小程序为了适配所有手机，大小750rpx
