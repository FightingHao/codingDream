import React, { Component } from 'react'

class Children extends React.Component {
  render() {
    return <input />
  }
}

// 在高阶组件HOC中的Forwarding Refs
function logProps(WrappedComponent) {
  class LogProps extends Component {
    render() {
      const { forwardedRef, ...rest } = this.props
      return <WrappedComponent ref={forwardedRef} {...rest} />
    }
  }

  return React.forwardRef((props, ref) => {
    return <LogProps {...props} forwardedRef={ref} />
  })
}

const LogProps = logProps(Children)

class Father extends Component {
  inputRef = React.createRef()

  componentDidMount() {
    console.log(this.inputRef)
  }

  render() {
    return (
      <div>
        <LogProps ref={this.inputRef} />
      </div>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <Father />
    )
  }
}