import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Table from './Table'
import './index.css'

class App extends Component {
  render() {
    return (
      <div className="App container">
        <h1>Hello, React!</h1>
        <Table></Table>
      </div>
    )
  }
}

ReactDOM.render(<App></App>, document.getElementById('root'))