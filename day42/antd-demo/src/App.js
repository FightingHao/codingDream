import React, { Component } from 'react'
import './App.css'
import Main from './Main'
import { HashRouter as Router, Route } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/dashboard/monitor" component={Main}></Route>
        </div>
      </Router>
    )
  }
}
