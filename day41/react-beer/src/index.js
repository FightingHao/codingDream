import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import App from './App'
import Single from './components/Single.js'
import './style.css'

render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/beer" component={Single} />
      <Route path="/search/:searchTerm" component={App} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
)
