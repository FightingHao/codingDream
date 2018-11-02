1. weapp-adapter<br>
  全局的window canvas对象<br>
  降低了游戏开发的难度， dom的感觉出来了<br>

2. canvas的比例问题<br>
  宽度是手机宽度<br>
  设计稿 750<br>
  设计稿大小 * canvas大小 / 750<br>
  canvas.width  canvas和image都可以直接设置width

3. 游戏框架<br>
  准备了大多数对象 Game State<br>
  cocos-2d 2d 腾讯使用的框架<br>
  phaser 2d<br>
  Egret 2d typescript<br>
  three.js 3d<br>

4. 架构<br>
  es6 extends 模块化机制 封装<br>
  js/libs/  js库<br>
  js/states 场景 -> 界面<br>
    - preload 加载资源
    - create 绘制
