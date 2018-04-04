/*
 * @author: shazhenghu,LastModifiedTime:undefined 
 * @params: {} 
 * @params:   {} 
 * @params: {} 
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'
import { AppContainer } from 'react-hot-loader'
import store from './appStore.js'
import RoutePage from './routePage'

const render = Component => {     //高阶组件
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Component />
            </Provider>
        </AppContainer>,
        document.getElementById('root'),
    )
}

render(RoutePage);

 // 增加react-hot-loader保持状态刷新操作，如果不需要可去掉并把下面注释的打开
// Webpack Hot Module Replacement API
if (module.hot) {
    // 隐藏You cannot change <Router routes>; it will be ignored 错误提示
    // react-hot-loader 使用在react-router 3.x上引起的提示，react-router 4.x不存在
    // 详情可参照https://github.com/gaearon/react-hot-loader/issues/298
    const orgError = console.error // eslint-disable-line no-console
    console.error = (...args) => {
        // eslint-disable-line no-console
        if (
            args &&
            args.length === 1 &&
            typeof args[0] === 'string' &&
            args[0].indexOf('You cannot change <Router routes>;') > -1
        ) {
            // React route changed
        } else {
            // Log the error as normally
            orgError.apply(console, args)
        }
    }
    module.hot.accept('./Page', () => {
        render(RoutePage)
    })
}

registerServiceWorker();