import React, { Component } from 'react'; 
import { Layout, Row, Col, Card } from 'antd'; 
import '../assets/travelpage.css';
const { Meta } = Card;

const { Content ,Footer} = Layout; 
const cardData = [
    {
      destination : "Berlin, Germany",
      img : "https://ssl.tzoo-img.com/images/tzoo.hd.14862.7444.937862.Berlin.jpg?width=392&spr=3",
      note : "Visit the Reichstag building. Admire the Berliner Dom. Time travel through East Side Gallery's paintings.",
    },
    {
      destination : "Prague, Czech",
      img : "https://www.somagnews.com/wp-content/uploads/2019/09/s3-e1569185090745.jpg",
      note : "Explore the Old Town Square. Watch the Astronomical Clock Strike an Hour. Stroll across the Charles Bridge.",
    },
    {
      destination : "Tokyo, Japan",
      img : "https://www.globeguide.ca/wp-content/uploads/2013/10/Japan-Tokyo-asakusa.jpg",
      note : "Snap up anime films and collectables at Akihabara. Take in old-fashioned Yanaka Ginza Shitamachi.",
    },
    {
      destination : "Istanbul, Turkey",
      img : "https://loveandroad.com/wp-content/uploads/2014/12/1-First-trip-to-istanbul-1280x720.jpg",
      note : "Pay a visit to the Hagia Sophia. Head inside the Blue Mosque. Discover an epic ceiling at the Chora Church.",
    }
    ]



class PortofolioComponent extends Component{
    render(){
        return(
            <Layout className="landing-container-transparant" >
                <Content style={{ overflow: "hidden" }}> 
                    <Row className="section-container">
                            <Col lg={24}>
                                <div className="text-soft-blue title-big bold discover-container">
                                    My Bucket List
                                </div>
                            </Col>
                            <Col lg={24}>
                                <hr style={{
                                    minHeight: 8,
                                    backgroundColor: '#a6b1e1',
                                    border: 'none',
                                    maxWidth: 100,
                                    borderRadius: 26,
                                }}/>
                            </Col>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                            <div className="site-card-wrapper-transparant" style={{ marginLeft: 230 }}>
                            <Row gutter={100}>
                                {cardData.map (data=>
                                <Col span={90}>
                                <Card
                                    hoverable
                                    style={{ width: 300 }}
                                    cover={<img alt="example" src={data.img} />}
                                >
                                    <Meta title={data.destination} 
                                    description={data.note} />
                                </Card>
                                </Col>
                                )}
                            </Row>
                            </div>
                        </Row>
                </Content>
                <Footer style={{ textAlign: 'center', color:'#fffff' }}>All right reserved ©2020 </Footer>
            </Layout>
        );
    }
}

export default PortofolioComponent;