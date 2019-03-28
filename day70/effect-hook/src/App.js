import React, { useState, useEffect } from 'react'

const App = (props) => {
  const [count, setCount] = useState(0)

  // 相当于 componentDidMount 和 componentDidUpdate，每次render都会执行
  useEffect(() => {
    document.title = `click ${count} count`
    console.log(props)
    
  })

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>click me</button>
    </div>
  )
}

export default App