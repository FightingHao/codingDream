import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from 'react-router-dom';
import logo from './assets/imgs/logo.png';
import Recommend from './recommend/Recommend'
import Ranking from './ranking/Ranking'
import Search from './search/Search'
import './assets/stylus/reset.styl'
import './App.styl';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app skin-app">
          <header className="app-header">
            <img src={logo} alt="logo" className="app-log" />
            <h1 className="app-title">React Music</h1>
          </header>
          <div className="music-tab">
            <div className="tab-item">
              <NavLink className="nav-link" to="/recommend">
                <span>推荐</span>
              </NavLink>
            </div>
            <div className="tab-item">
              <NavLink className="nav-link" to="/ranking">
                <span>排行榜</span>
              </NavLink>
            </div>
            <div className="tab-item">
              <NavLink className="nav-link" to="/search">
                <span>搜索</span>
              </NavLink>
            </div>
          </div>
          <div className="music-view">
            <Switch>
              <Route path="/recommend"
                component={Recommend}
              />
              <Route path="/ranking"
                component={Ranking}
              />
              <Route path="/search"
                component={Search}
              />
              <Redirect from="/" to="/recommend" />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
