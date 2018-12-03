layout
css直接表达布局时不完整的
1. 网页和平面设计媒体一样 美观
  - 之前使用table来做布局 tr + td
  - 天生是用来展示数据的
  - table 不适合现代富媒体
  - 预先分配
2. 标签的盒模型 比较慢
  - 易出问题 margin 合并 浮动 定位
  - web2.0 成熟的float 精确的定位
  - 现代的flex table
  - 标签能力及表现 加css属性
  - 布局layout = 行row列column的规划
3. 由2 推出圣杯布局
4. 圣杯式 DIV+CSS
  兼容性一点问题都没有的三列式布局 主列和两边侧边栏 PC时代
  浮动 block => inline 但是宽度还在
  圣杯式布局和双飞翼布局经典的三栏式布局  效果基本相同 两边两栏宽度固定 中间栏宽度自适应 中间列优先加载 优先渲染
  兼容性好 PC IE8 -> chrome/Edge
  margin 负值 float left 主列100% 侧边栏margin负值
  区别 圣杯式 position: relative + left/right -200px
  双飞翼： 给main 加子元素 mian 都是留出位置
  双飞翼不需要让侧边栏移动
