import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// 路由的配置
const routes = [
  {
    path: '/',
    // 精确匹配
    exact: true,
    main: () => <h2>Home</h2>
  },
  {
    path: '/bubblegum',
    main: () => <h2>Bubblegum</h2>
  },
  {
    path: '/shoelaces',
    main: () => <h2>Shoelaces</h2>
  },
]

function SidebarExample() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <div
          style={{
            padding: '10px',
            width: '40%',
            background: '#0f0f0f'
          }}
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/bubblegum">Bubblegum</Link>
            </li>
            <li>
              <Link to="/shoelaces">Shoelaces</Link>
            </li>
          </ul>

        </div>
        <div
          style={{
            flex: 1,
            padding: '10px'
          }}
        >
          {
            routes.map((route, index) => {
              return <Route path={route.path} exact={route.exact} component={route.main} key={index}/>
            })
          }
        </div>
      </div>
    </Router>
  )
}

ReactDOM.render(<SidebarExample />, document.getElementById('root'))