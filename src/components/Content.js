import React from 'react'
import { Input, Tabs, Col } from 'antd'
const Search = Input.Search
const TabPane = Tabs.TabPane

export default () => (
    <div>
        <Col span={3}>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Tab 1" key="1">
                    Tab 1
                </TabPane>
                <TabPane tab="Tab 2" disabled key="2">
                    Tab 2
                </TabPane>
                <TabPane tab="Tab 3" key="3">
                    Tab 3
                </TabPane>
            </Tabs>
            <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                style={{ width: 200 }}
            />
            <br />
            <br />
            <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                enterButton
            />
            <br />
            <br />
            <Search
                placeholder="input search text"
                enterButton="Search"
                size="large"
            />
        </Col>
    </div>
)
