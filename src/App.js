import React from 'react'
import { Layout,notification,Icon } from 'antd'
import HeaderCustom from './component/HeaderCustom.js'
import SiderCustom from './component/SiderCustom.js'
import Content from './component/Content.js'
import Footer from './component/Footer.js'







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