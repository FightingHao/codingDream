import React, { Component } from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Results from './components/Results'

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header siteName="Beer me!" />
        <Search />
        <Results />
      </div>
    )
  }
}
