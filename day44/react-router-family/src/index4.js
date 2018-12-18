import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function ParamsExample() {
  return (
    <Router>
      <div>
        <p>
          React Router does not have any opinions about how your parse URL query
          strings. Some applications use simple key=value query strings, but
          others embed arrays and objects in the query string. So it's up to you
          to parse the search string yourself.
      </p>
        <p>
          In modern browsers that support{" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/API/URL">
            the URL API
        </a>
          , you can instantiate a <code>URLSearchParams</code> object from{" "}
          <code>location.search</code> and use that.
      </p>
        <p>
          In{" "}
          <a href="https://caniuse.com/#feat=url">
            browsers that do not support the URL API (read: IE)
        </a>{" "}
          you can use a 3rd party library such as{" "}
          <a href="https://github.com/sindresorhus/query-string">query-string</a>.
      </p>
        <h2>Accounts</h2>
        <ul>
          <li>
            <Link to={{ pathname: "/account", search: "?name=netflix" }}>
              Netflix
            </Link>
          </li>
          <li>
            <Link to={{ pathname: "/account", search: "?name=zillow-group" }}>
              Zillow Group
            </Link>
          </li>
          <li>
            <Link to={{ pathname: "/account", search: "?name=yahoo" }}>
              Yahoo
            </Link>
          </li>
          <li>
            <Link to={{ pathname: "/account", search: "?name=modus-create" }}>
              Modus Create
            </Link>
          </li>
        </ul>
        <Route path="/account" component={Child} />
      </div>
    </Router>
  )
}

function Child({ location}) {
  return (
    <h1>{location.search.slice(6)}</h1>
  )
}

ReactDOM.render(<ParamsExample />, document.getElementById('root'))