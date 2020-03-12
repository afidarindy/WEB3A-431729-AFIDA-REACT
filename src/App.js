  import React from 'react';
  //import logo from './logo.svg';
  import './App.css';

  import './style.css';
  import { Row, Col, Card} from 'antd';

  function App () {
    const cardData = [
      {
        country : "South Korea",
        city : "Seoul",
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
      <div className="site-card-wrapper">
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
      );
  }

  export default App;
