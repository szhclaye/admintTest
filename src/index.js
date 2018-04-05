/*
 * @author: shazhenghu,LastModifiedTime:undefined 
 * @params:  AppContainer -->Provider(Root.js)
 * @params:  
 * @params: 
 */
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import Root from './Root.js'

render(
    <AppContainer>
          <Root />
    </AppContainer>,
    document.getElementById('root')
);

// Provider 在Root.js里面
if (module.hot) {
    module.hot.accept('./Root', () => {
      const RootContainer = require('./Root').default;
      render(
        <AppContainer>
          <RootContainer />
        </AppContainer>,
        document.getElementById('root')
      );
    });
  }