import React, { useState, useRef } from 'react'

export default function App() {
  const selectRef = useRef(null)
  const [total, setTotal] = useState(0)

  function add() {
    setTotal(total + selectRef.current.value * 1)
  }

  function addOdd() {
    if (total % 2 !== 0) {
      add()
    }
  }

  return (
    <div>
      <h2>click {total} time</h2>
      <select ref={selectRef}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>{' '}
      <button onClick={() => add()}>+</button>{' '}
      <button onClick={() => setTotal(total - selectRef.current.value * 1)}>-</button>{' '}
      <button onClick={() => addOdd()}>add if odd</button>{' '}
      <button onClick={() => setTimeout(add, 1000)}>add async</button>
    </div>
  )
}