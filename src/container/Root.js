/*
 * @author: shazhenghu,CreateTime:2018-04-06 20:08:36,LastModifiedTime:2018-04-06 20:08:3
 *  * @input:    from  store  route
 * @output:   to  index.js(entry)
 * @params: 
 */
import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import { history,store } from '@/store';
import RouteConfig from '@/routeConfig';


export default () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <RouteConfig />
        </ConnectedRouter>
    </Provider>
);
