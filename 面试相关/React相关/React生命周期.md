### 初始化阶段
1. 设置组件的默认属性
```javascript
static defaultProps = {
    name: 'sls',
    age:23
};
//or
Counter.defaltProps={name:'sls'}
```
2. 执行构造函数初始化状态
```javascript
constructor() {
    super();
    this.state = {number: 0}
}
```

3. ComponentWillMount

4. render

5. ComponentDidMount

### 运行中阶段
1. ComponentWillReceiveProps
> 组件接收到属性时触发

2. shouldComponentUpdate
> 当组件接收到新属性，或者组件的状态发生改变时触发。组件首次渲染时并不会触发

3. ComponentWillUpdata

4. ComponentDidUpdate
> 组件被更新完成后触发。页面中产生了新的DOM的元素，可以进行DOM操作

### 销毁阶段
> ComponentWillUnmount