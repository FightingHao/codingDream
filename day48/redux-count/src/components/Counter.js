import React, { Component } from 'react'

export default class Counter extends Component {
  render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <div>
        Click: {value} times
        {' '}
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    )
  }
}
