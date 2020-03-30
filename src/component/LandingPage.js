import React, { Component } from 'react'; 
import { Layout, Row, Col } from 'antd'; 
import '../assets/landingpage.css';

const { Content , Footer} = Layout;

class LandingComponent extends Component{
    render(){
        return(
            <Layout className="landing-container-transparant">
                
                <Content style={{ overflow: "hidden" }}> 
                    <Row className="section-container">
                        <Col lg={12} md={12} sm={12}>
                        <br/><br/>
                        <div>
                        <img
                        src="https://lh3.googleusercontent.com/proxy/22TZ5SR1X79mJ7V-7heXfGqR1bktjpcRTf2ItS0T6QthZY_ZX92hbA3YutzQJTZpvwbY_HfSx0jhTEQFhdEGMIjGwqN10QyAQhL5xVpfUXDWopNn8CttMfA7r3GES7uKkRul3rMmt90Kl4aJelPN0MBuHeiY_L85jJfuyI25Z4w" alt=""
                        style={{maxWidth: '80%'}}
                        />
                        </div>
                        </Col>
                        <Col lg={10} md={10} sm={10}>
                            <Row>
                                <Col span={24}>
                                    
                                    <div className="title-container">
                                        <br/><br/><br/>
                                        <span className="text-black title-biggest bold">Hi, buddy!</span>
                                        <br/>
                                        <span className="text-grey title-medium bold">I'm Grace VanderWaal</span>
                                    </div>
                                </Col>
                                <Col span={24}>
                                    <div className="description-container desc-medium">
                                        I believe that miracles can happen. So, possibly..
                                    </div>   
                                </Col>
                            </Row>
                        </Col>  
                    </Row>
                </Content>
                <Footer style={{ textAlign: 'center', color:'#fffff' }}>All right reserved ©2020 </Footer>
            </Layout>
        );
    }
}

export default LandingComponent;