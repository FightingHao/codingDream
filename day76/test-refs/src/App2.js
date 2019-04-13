import React, { Component } from 'react'

class Father extends Component {
  inputRef = React.createRef()

  componentDidMount() {
    console.log(this.inputRef)
  }

  render() {
    return (
      <div>
        <Children ref={this.inputRef} />
      </div>
    )
  }
}

// forwardRef 父组件用来获取子组件的dom元素的
const Children = React.forwardRef((props, ref) => {
  return (
    <input ref={ref} />
  )
})


export default class App extends Component {
  render() {
    return (
      <Father />
    )
  }
}