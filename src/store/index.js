/*
 * @author: shazhenghu,CreateTime:2018-04-06 20:55:17,LastModifiedTime:2018-04-06 20:55:17 
 * @input:  reducers
 * @output:  store
 * @params: 
 */
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import reducers from '../reducers';

const comReducer = combineReducers({
    ...reducers,
    router: routerReducer // route
});

const history = createBrowserHistory();
const middlewares = [routerMiddleware(history)];

if (process.env.NODE_ENV !== 'production') {
    middlewares.push(require('redux-immutable-state-invariant')());
}

export default createStore(comReducer,{},applyMiddleware(...middlewares));
