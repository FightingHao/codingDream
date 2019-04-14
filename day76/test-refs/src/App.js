import React, { Component } from 'react'

class Father extends Component {
  inputRef = React.createRef()
  state = {
    name: 'hao',
    age: 18
  }

  componentDidMount() {
    console.log(this.inputRef)
  }

  render() {
    return (
      <div>
        <Children {...this.state} ref={this.inputRef} />
      </div>
    )
  }
}

// forwardRef 父组件用来获取子组件的dom元素的
const Children = React.forwardRef((props, ref) => {
  console.log(props)
  console.log(ref)

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