- 模板里要有if else for 指令
  + 模板里存在业务逻辑 wx:if wx:else wx:for

- 界面状态 登录前 登陆后状态
  + 数据驱动界面状态
  + hasUserInfo 决定了界面有两种 wx:if  wx:else

- 微信的生态及机制
  + 小程序，获取用户信任和信息
  + 小程序可以分享到讨论组
  + 用户信息 隐私 用户许可
  + button询问
    - open-type="getUserInfo"
    - bindgetUserinfo="getUserInfo"
  + block显示

- setData()
  + 改变data里的数据的值
  + 并且拥有让界面相关的部分热更新的能力

- wx:key
  + 循环要加唯一性的key
  + 更新替换时 提升效率

- 设计数据
  + lists = [已完成， 未完成]
  + lists 全部列表
  + doneLists = []
  + undoneLists= []
  + wx-for="{{lists}}"
  + currentState = 'all'  根据这个来判断状态

- 界面状态
  + 多种状态
    1. tabbar .active UI状态 => 数据驱动 currentState = 'all'
    2. 任务列表 列表数据， UI状态 除了 lists 再加一个currentList
    