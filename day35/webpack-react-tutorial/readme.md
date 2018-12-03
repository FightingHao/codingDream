SPA  Single Page Application
# root MVVM 组建式开发
Compoment
只有一个， React 就是一个完全实践MVVM组件式开发的No.1框架
Component es6 modules
webpack 来做开发流程 开发文件在src下
webpack 编译及分派工作
webpack-cli 接受脚本， 进行编译或dev

@babel/preset-env babel工作空间下的 @babel babel家族的

npm init -y
yarn add webpack -D
yarn add webpack-cli -D
yarn add @babel/core babel-loader @babel/preset-env @babel/preset-react -D
yarn add react react-dom (dom节点结合)
yarn global add create-react-app


react 相比于小程序 MVVM 上小程序抄的react
不同的地方在于组件开发思想更加的专业
- 容器组件
  FormComponent  容器组件 分发数据
    InputComponent   表现式组件 行为交互
    InputComponent