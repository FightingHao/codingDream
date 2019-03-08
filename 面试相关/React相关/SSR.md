`react-dom/server`包里有两个方法`renderToString`和`renderToStaticMarkup`，作用是把组件转化为HTML字符串
- `renderToString`生成的HTML的DOM会带有额外的属性，各个DOM会带有`data-react-id`，第一个DOM会带有`data-checksum`属性
  - `data-react-id`是为了标识react的各个组件
  - `data-checksum`是用来判断是否需要渲染，这个属性变化则需要重新渲染
  - 这两个属性都是为了提高react的服务端渲染的性能
- `renderToStaticMarkup`转化的HTML不会带有额外的属性，从而节省HTML字符串的大小