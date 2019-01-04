yarn add redux react-redux redux-logger redux-saga prop-types

中间？ UI <->$n Redux
中间件 middleware 生态npm

UI dispatch INCREMENT_ASYNC
何时？订阅发布模式
中间处理一下 发布者 redux-thunk redux-saga
请求 setTimeout redux

saga 是一个redux状态异步处理的中间件
原生的react 通过生命周期或者业务逻辑，来一部请求数据，耦合了redux数据管理业务在UI中 是不可取的
- 异步绝对不可能改变的 (axios, 定时器)
  promise + generator* yield/ async await
  放到saga文件中
  watch 每一个actionType, take给一个异步函数去执行， 仅次于中间件中
  仍然处于redux createStore(reducers, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(rootSaga)
  takeEvery(ActionType, gen)
- redux 状态最终仍然是同步处理的
  put 在saga内部dispatch同步action
- 异步流程很多， 所以把他和为一处 all

serviceWorker.js PWA需要