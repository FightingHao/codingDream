import * as React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import { App } from './app'
import { About, MembersPage, MemberPage, MemberPageContainer } from './components'

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <HashRouter>
      <div className="container-fluid">
        <Route component={App} />
        <Switch>
          <Route exact path='/' component={About} ></Route>
          <Route exact path='/about' component={About} ></Route>
          <Route exact path='/members' component={MembersPage} ></Route>
          <Route exact path='/member' component={MemberPageContainer} ></Route>
        </Switch>
      </div>
    </HashRouter>
  )
}