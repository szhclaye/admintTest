import React, { Component } from 'react';
import { Layout,Affix,Row,Col } from "antd";

import Sidebar from "@/components/Sidebar";

class App extends Component {
    state = {  }
    render() {
        return (
            <Layout className="ant-ant-layout-has-sider">
                <Sidebar />
            </Layout>
        );
    }
}

export default App;
