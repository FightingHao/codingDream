// document.write('hello')
import * as React from 'react'
import * as ReactDOM from 'react-dom'
// import { HelloComponent } from './hello'
// import { App } from './App'
import { AppRouter } from './router'

ReactDOM.render(
  <AppRouter />,
  document.getElementById('root')
)