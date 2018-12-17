import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, Prompt } from 'react-router-dom'

function PreventingTransitionExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Form</Link>
          </li>
          <li>
            <Link to="/one">One</Link>
          </li>
          <li>
            <Link to="/two">two</Link>
          </li>
        </ul>
        <Route path="/" exact component={Form} />
        <Route path="/one" exact component={One} />
        <Route path="/two" exact component={Two} />
      </div>
    </Router>
  )
}

const One = () => {
  return (
    <div>one</div>
  )
}

const Two = () => {
  return (
    <div>two</div>
  )
}

class Form extends React.Component {
  state = {
    isBlocking: false
  }

  componentWillUnmount() {
    console.log('unmount')
  }

  render() {
    let { isBlocking } = this.state

    return < form
      onSubmit={
        event => {
          console.log(event)
          event.preventDefault()
          event.target.reset()
        }
      }
    >
      <Prompt
        when={isBlocking}
        message={location => `确认要跳转到${location.pathname}吗`}
      >

      </Prompt>
      <p>
        <input
          type="text"
          size="50"
          placeholder="type something to broke transitions"
          onChange={
            event => {
              this.setState({
                isBlocking: event.target.value.trim().length > 0
              })
            }
          }
        />
      </p>
      <p>
        <button type="submit">Submit to stop blocking</button>
      </p>
    </form >
  }
}

ReactDOM.render(<PreventingTransitionExample />, document.getElementById('root'))