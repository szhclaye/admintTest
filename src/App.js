import React from 'react'
import { Layout,notification,Icon } from 'antd'

//.babelrc  style:css则不能加载antd的less样式，会报错
import HeaderCustom from './components/HeaderCustom.js'
import SiderCustom from './components/SiderCustom.js'
import Content from './components/Content.js'
import Footer from './components/Footer.js'





const App = ()=>(
    <Layout>
      <HeaderCustom>Header</HeaderCustom>
      <Layout>
        <SiderCustom>Sider</SiderCustom>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
)


export default App;