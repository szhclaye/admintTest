import React from 'react'
import { Provider } from 'react-redux'

import store from './appStore.js';
import routeComp from './appRoute';

export default ()=>(
    <Provider store={store}>
        <routeComp />
    </Provider>
)