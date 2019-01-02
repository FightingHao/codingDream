// 负责provider，生成createStore
import React, { Component } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import store from '../store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div></div>
      </Provider>
    )
  }
}