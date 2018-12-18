import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function AmbiguousExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/company">Company</Link>
          </li>
          <li>
            <Link to="/kim">Kim</Link>
          </li>
          <li>
            <Link to="/chris">Chris</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/company" component={Company} />
          <Route path="/:user" component={User} />
        </Switch>
      </div>
    </Router>
  )
}

function About() {
  return <h2>About</h2>
}

function Company() {
  return <h2>Company</h2>
}

function User({ match }) {
  return <div>User: {match.params.user}</div>
}

ReactDOM.render(<AmbiguousExample />, document.getElementById('root'));
