import React, { Component } from 'react'

// EC = HF(WrappedComponent)

var enchanceComponent = (Component) => {
  class Enhance extends React.Component {
    render() {
      return (
        <section>
          <h1>
            I am high-order component
          </h1>
          <Component
            {...this.state}
            {...this.props}
          />
        </section>
      )
    }
  }
  return Enhance
}

export default enchanceComponent