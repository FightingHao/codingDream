传统diff算法的复杂度为O(n3)，通过大胆假设降为O(n)
- DOM结构相对稳定，很少发生节点的跨层移动
- 相同类的组件会生成相似的树形结构，不同类的组件生成的树形结构也不同
- 同一层的一组节点，它们可以通过唯一的key来标识

基于以上三个前提策略，React分别对`tree diff`, `component diff`, `element diff`进行算法优化

## tree diff
- 广度优先分层比较
- 基于策略一，React 对树的算法进行了简洁明了的优化，即对树进行分层比较，两棵树只会对同一层次的节点进行比较。

## component diff
- 如果是同一类型的组件，按照原策略继续比较 virtual DOM tree
- 如果不是，则将该组件判断为 dirty component，从而替换整个组件下的所有子节点
- 对于同一类型的组件，有可能其 Virtual DOM 没有任何变化，如果能够确切的知道这点那可以节省大量的 diff 运算时间，因此 React 允许用户通过 shouldComponentUpdate() 来判断该组件是否需要进行 diff

## element diff
- 首先对新集合的节点进行循环遍历，for (name in nextChildren)，通过唯一 key 可以判断新老集合中是否存在相同的节点
- if (prevChild === nextChild)，如果存在相同节点，则进行移动操作
- 但在移动前需要将当前节点在老集合中的位置与 lastIndex 进行比较
- if (child._mountIndex < lastIndex)，则进行节点移动操作，否则不执行该操作。
- 这是一种顺序优化手段，lastIndex 一直在更新，表示访问过的节点在老集合中最右的位置（即最大的位置），
- 如果新集合中当前访问的节点比 lastIndex 大，说明当前访问节点在老集合中就比上一个节点位置靠后，则该节点不会影响其他节点的位置，因此不用添加到差异队列中，即不执行移动操作，只有当访问的节点比 lastIndex 小时，才需要进行移动操作。

## 总结
- React 通过制定大胆的 diff 策略，将 O(n3) 复杂度的问题转换成 O(n) 复杂度的问题；

- React 通过分层求异的策略，对 tree diff 进行算法优化；

- React 通过相同类生成相似树形结构，不同类生成不同树形结构的策略，对 component diff 进行算法优化；

- React 通过设置唯一 key的策略，对 element diff 进行算法优化；

- 建议，在开发组件时，保持稳定的 DOM 结构会有助于性能的提升；

- 建议，在开发过程中，尽量减少类似将最后一个节点移动到列表首部的操作，当节点数量过大或更新操作过于频繁时，在一定程度上会影响 React 的渲染性能。

参考：https://zhuanlan.zhihu.com/p/20346379