## React内部的三层架构
- 虚拟DOM：它只负责描述结构与逻辑
- 内部组件层：它们负责组件的更新, ReactDOM.render、 setState、 forceUpdate都是与它们打交道，能让你多次setState，只执行一次真实的渲染, 在适合的时机执行你的组件实例的生命周期钩子
- 底层渲染层：不同的显示介质有不同的渲染方法，比如说浏览器端，它使用元素节点，文本节点，在Native端，会调用oc， java的GUI， 在canvas中，有专门的API方法

## fiber
diff算法 + virtual dom  =>  reconciler
react15 => stack reconciler

见 https://juejin.im/post/5bed21546fb9a049e93c4bac