import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

var Store = {
  _handlers: [],
  _flag: false,
  get() {
    return this._flag
  },
  set(value) {
    this._flag = value
    this._handlers.forEach(handler => handler(value))
  },
  subscribe(handler) {
    this._handlers.push(handler)
  }
}

function Switch({ value, onChange }) {
  return (
    <button onClick={e => onChange(!value)}>
      {value ? 'light on' : 'light off'}
    </button>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: Store.get()
    }
    Store.subscribe((value) => {
      this.setState({ value })
    })
  }
  render() {
    return (
      <div>
        <Switch
          value={this.state.value}
          onChange={Store.set.bind(Store)}
        />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)