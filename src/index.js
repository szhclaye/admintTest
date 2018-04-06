/*
 * @author: shazhenghu,CreateTime:2018-04-06 19:51:41,LastModifiedTime:2018-04-06 19:51:41 
 * @input:  AppContainer -->Provider(/contanier/Root.js)
 * @output:  ReactDOM
 * @params:  
 * @params: 
 */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Root from './container/Root.js';

render(
    <AppContainer>
        <Root />
    </AppContainer>,
    document.getElementById('root')
);

// Provider 在Root.js里面
if (module.hot) {
    module.hot.accept('./container/Root', () => {
        const RootContainer = require('./container/Root.js').default;
        render(
            <AppContainer>
                <RootContainer />
            </AppContainer>,
            document.getElementById('root')
        );
    });
}
