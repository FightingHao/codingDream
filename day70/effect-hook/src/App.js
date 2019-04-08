import React, { useEffect, useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  const initData = async () => {
    // 发起请求并执行初始化操作
  }

  const stop = async () => {
    console.log('clear')
  }

  // 执行初始化操作，需要注意的是，如果你只是想在渲染的时候初始化一次数据，那么第二个参数必须传空数组。
  useEffect(() => {
    console.log('useEffect')
    console.log(count2)
    initData()
    return stop
  }, [count2])

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>click</button>
      <button onClick={() => setCount2(count2 + 1)}>click</button>
    </div>
  )
}

export default App
