import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom'

// 鉴权
const fakeAuth = {
  isAuthenticated: false,
  authenticated(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 1000)
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 1000)
  }
}

function AuthExample() {
  return (
    <Router>
      <div>
        {/* <Route component={AuthButton} path="/" /> */}
        <AuthButton />
        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Route path="/public" component={Public} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/protected" component={Protected} />
      </div>
    </Router>
  )
}

function Public() {
  return <div>Public</div>
}

function Protected() {
  return <div>Protected</div>
}

function PrivateRoute({ component: Component, ...rest }) {
  // console.log(rest)
  return (
    <Route {...rest}
      render={
        props => {
          console.log(props)
          return fakeAuth.isAuthenticated ? (
            <Component />
          ) : (
              // 跳过去是一个pushState的过程
              <Redirect to={{
                pathname: '/login',
                // 读取要跳转的地方 登陆后就跳转到
                state: { from: props.location }
              }} />
            )
        }
      }
    />
  )
}

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  }

  login = () => {
    // fakeAuth.isAuthenticated = true
    fakeAuth.authenticated(() => {
      this.setState({
        redirectToReferrer: true
      })
    })
  }

  render() {
    // location.state是由history的api带来的
    let { from } = this.props.location.state || { from: { pathname: '/' } }
    console.log(from)
    if (this.state.redirectToReferrer)
      return <Redirect to={from} />
    return (
      <div>
        <p>请先登录在访问{from.pathname}</p>
        <button onClick={this.login}>Login</button>
      </div>
    )
  }
}

const AuthButton = withRouter(({ history }) => {
  console.log(111)
  console.log(history)
  console.log(111)
  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!
      <button
        onClick={() => {
          fakeAuth.signout(() => {
            // 无法用Redirect
            // js 并非 jsx输出
            history.push('/')
          })
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
      <p>你还没登录</p>
    )
})

ReactDOM.render(<AuthExample />, document.getElementById('root'))