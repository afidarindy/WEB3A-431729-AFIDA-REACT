import React from 'react';
//import logo from './logo.svg';
import './App.css';

import './style.css';
import {Layout, Menu, Breadcrumb, Row, Col, Card } from 'antd';


function App () {


// return (
//   <div className="site-card-wrapper">
  
//   </div>
//   );

const { Header, Content, Footer } = Layout;
const cardData = [
  {
    country : "Germany",
    city : "Berlin",
  },
  {
    country : "England",
    city : "London",
},
  {
    country : "Japan",
    city : "Tokyo",
  }
]

return (
<Layout className="layout">
  <Header>
    <div className="logo" />
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['2']}
      style={{ lineHeight: '64px' }}
    >
      <Menu.Item key="1">Home</Menu.Item>
      <Menu.Item key="2">About</Menu.Item>
      <Menu.Item key="3">Contact</Menu.Item>
    </Menu>
  </Header>
  <Content style={{ padding: '0 50px' }}>
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>Country</Breadcrumb.Item>
      <Breadcrumb.Item>Bucket list</Breadcrumb.Item>
    </Breadcrumb>
    <div className="site-layout-content">
      <Row gutter={16}>
    {cardData.map (data=>
      <Col span={8}>
      <Card bordered={true}>
          <h2>{data.country}</h2>
          <p>{data.city}</p>
      </Card>
      </Col>
      )}
  </Row>
    </div>
  </Content>
  <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
</Layout>
);

}

export default App;
