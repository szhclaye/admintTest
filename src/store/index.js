/*
 * @author: shazhenghu,CreateTime:2018-04-06 20:55:17,LastModifiedTime:2018-04-06 20:55:17 
 * @input:  reducers
 * @output:  store
 * @params: 
 */
import { createStore, applyMiddleware, combineReducers } from "redux";
import createBrowserHistory from "history/createBrowserHistory";
import { routerReducer, routerMiddleware } from "react-router-redux";
import reducers from "../reducers";

const comReducer = combineReducers({
    ...reducers,
    router: routerReducer // route
});

const history = createBrowserHistory();
const middleware = [routerMiddleware(history)];

const storeEnhancers = compose(
    applyMiddleware(...middlewares),
    win && win.devToolsExtension ? win.devToolsExtension() : f => f // Devtools
);

export default createStore(comReducer, {}, storeEnhancers);
