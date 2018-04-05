/*
 * @author: shazhenghu,LastModifiedTime:undefined 
 * @params:  RoutePage
 * @import:  App.js
 * @export:  route
 */
import React from 'react'
import { ConnectedRouter } from 'react-router-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import App from './App.js'

const history = createBrowserHistory()

const routePage = () => (
    <ConnectedRouter history={history}>
        <Switch>
            <Route
                exact
                path="/"
                render={() => <Redirect to="/Page" push />}
            />
            <Route path="/Page" component={App} />
        </Switch>
    </ConnectedRouter>
)

export default routePage
