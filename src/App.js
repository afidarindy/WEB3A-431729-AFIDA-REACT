import React from 'react';
// import ReactDOM from 'react-dom';
// import {BrowserRouter} from "react-router-dom";
import './assets/App.css';
import Navbar from './common/layout';
import Routing from './common/routes'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Navbar/>
        <Routing/>
      </div>
    );
  }
  
}

export default App;

// // import React from 'react';
// // import './App.css';
// // import './style.css';
// // import {Layout, Menu, Row, Col, Card } from 'antd';
// // import BucketList from './container/BucketList/bucketlist';


// // function App () {

// // const { Header, Content, Footer } = Layout;
// const { Meta } = Card;
// const cardData = [
// {
//   destination : "Berlin, Germany",
//   img : "https://ssl.tzoo-img.com/images/tzoo.hd.14862.7444.937862.Berlin.jpg?width=392&spr=3",
//   note : "Visit the Reichstag building. Admire the Berliner Dom. Time travel through East Side Gallery's paintings.",
// },
// {
//   destination : "Prague, Czech",
//   img : "https://www.somagnews.com/wp-content/uploads/2019/09/s3-e1569185090745.jpg",
//   note : "Explore the Old Town Square. Watch the Astronomical Clock Strike an Hour. Stroll across the Charles Bridge.",
// },
// {
//   destination : "Tokyo, Japan",
//   img : "https://www.globeguide.ca/wp-content/uploads/2013/10/Japan-Tokyo-asakusa.jpg",
//   note : "Snap up anime films and collectables at Akihabara. Take in old-fashioned Yanaka Ginza Shitamachi.",
// },
// {
//   destination : "Istanbul, Turkey",
//   img : "https://loveandroad.com/wp-content/uploads/2014/12/1-First-trip-to-istanbul-1280x720.jpg",
//   note : "Pay a visit to the Hagia Sophia. Head inside the Blue Mosque. Discover an epic ceiling at the Chora Church.",
// }
// ]

// // return (
  
// // <Layout className="layout">
// //   <Header>
// //     <div className="logo" />
// //     <Menu
// //       theme="dark"
// //       mode="horizontal"
// //       style={{ lineHeight: '50px' }}>
// //       <Menu.Item key="1">Home</Menu.Item>
// //       <Menu.Item key="2">About</Menu.Item>
// //       <Menu.Item key="3">Contact</Menu.Item>
// //     </Menu>
// //   </Header>

// //   <Content style={{ padding: '0 50px' }}>

//     <div className="site-layout-content">
//       <Row gutter={32}>
//         {cardData.map (data=>
//           <Col>
//             <Card bordered={false}>
//             <Card
//               hoverable
//               style={{ width: 240, height : 280 }}
//               cover={<img alt="example" src= {data.img} height="120" width="200" />}
//   >
//               <Meta title = {data.destination} description = {data.note} />
//             </Card> 
//             </Card>
//           </Col>
//           )
//         }
//       </Row>
//     </div>

// //     <BucketList />
// //   </Content>

// //   <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>

// // </Layout>
// // );

// // }

// // export default App;
