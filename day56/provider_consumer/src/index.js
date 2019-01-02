import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from './context'
import Header from './Header'

class App extends Component {
  render() {
    return (
      <Provider value={{ title: 'React In Patterns' }}>
        <Header></Header>
      </Provider>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)