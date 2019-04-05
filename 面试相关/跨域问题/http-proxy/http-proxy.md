通过webpack配置跨域
> yarn add http-proxy
```js
proxy: {
  '/api': {
    target: 'http://localhost:3000',
    pathRewrite: { '/api': '' }
  }
}
```