/*
 * @author: shazhenghu,CreateTime:2018-04-06 20:08:36,LastModifiedTime:2018-04-06 20:08:3
 *  * @input:    from  store  route
 * @output:   to  index.js(entry)
 * @params: 
 */
import React from "react";
import { Provider } from "react-redux";
import store from "../store";
import route from "../route";
import DevTools from "./DevTools.js";
import { ConnectedRouter } from "react-router-redux";
import createBrowserHistory from "history/createBrowserHistory";

const history = createBrowserHistory();

export default () => (
    <Provider store={store}>
        <div>
            <ConnectedRouter history={history} children={route} />
            <DevTools />
        </div>
    </Provider>
);
