yarn add hapi@16
yarn add env2
yarn add hapi-swagger@7 inert@4 vision@4 package
yarn add sequelize sequelize-cli mysql2
yarn add axios joi 参数校验

node_modules/.bin/sequelize init
db:migrate:undo
sequelize migration:create --name add-columns-to-shops-table
sequelize seed:create --name init-shops初始化数据
sequelize db:seed:all 添加数据

Swagger API文档 UI框架
API是开发工作中的一环 hapi-swagger 将API开发融合进代码之中
前后端分离开发 依赖文档来交流
现代开发中 项目越来越大 用户越来越多 用户体验越来越重要
前端React/VUE 独立开发
后端不再负责整体项目架构 以提供API为主

文档也是代码 以plugin的方式接入 register到app.js/documentation
只要在每个路由里配置一下tags

sequelizq + model defined