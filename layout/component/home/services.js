import React from "react";

import TranslateText from "../../common/translateText";
import Service from "../../common/SeoComponent/services"
import { Layout, Row, Col } from "antd";
import strings from "../../../static/lang/eng/eng.json";

function Services(props) {
  return (
    <Layout className="page-section">
      <Row>
        <Col span={24} className="page-heading">
          <h2 className="black">
           
              
            <TranslateText
                    text= {strings.home.services.heading}
                  />
            </h2>
         
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div className="container">
            <Row>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <div className="service-box">
                  <div id="x">
                  <img src="/static/images/rr.png" />
                  </div>
                  <h3>
                    <Service name= {strings.home.services.web.heading} description={strings.home.services.web.content}/>
                    <TranslateText
                    text=   {strings.home.services.web.heading}
                  />
                    </h3>
                  <p>
                  <TranslateText
                    text= {strings.home.services.web.content}
                  />
                    
                  </p>
                </div>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <div className="service-box">
                <div id="x">
                  <img src="/static/images/apps2.png" />
                  </div>
                  <h3>
                  <Service name= {strings.home.services.mobile.heading} description={strings.home.services.mobile.content}/>
                    <TranslateText
                    text= {strings.home.services.mobile.heading}
                  />
                    </h3>
                  <p>
                  
                  <TranslateText
                    text= {strings.home.services.mobile.content}
                  />
                  </p>
                </div>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <div className="service-box">
                <div id="x">
                  <img src="/static/images/graphics.png" />
                  </div>
                  <h3>
                  <Service name= {strings.home.services.graphics.heading} description={strings.home.services.graphics.content}/>
                    <TranslateText
                    text= {strings.home.services.graphics.heading}
                  />
                    </h3>
                  <p>
                
                  <TranslateText
                    text=   {strings.home.services.graphics.content}
                  />
                  </p>
                </div>
              </Col>
            </Row>
            
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div className="container">
            <Row>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <div className="service-box">
                  <div id="x">
                  <img src="/static/images/devopss.png"  />
                  </div>
                  <h3>
                  <Service name= {strings.home.services.devops.heading} description={strings.home.services.devops.content}/>
                    <TranslateText
                    text=   {strings.home.services.devops.heading}
                  />
                    </h3>
                  <p>
                  <TranslateText
                    text= {strings.home.services.devops.content}
                  />
                    
                  </p>
                </div>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <div className="service-box">
               <div id="x">
                  <img src="/static/images/marketings.png"   />
                  </div>
                  <h3>
                  <Service name= {strings.home.services.digital.heading} description={strings.home.services.digital.content}/>
                    <TranslateText
                    text= {strings.home.services.digital.heading}
                  />
                    </h3>
                  <p>
                  
                  <TranslateText
                    text= {strings.home.services.digital.content}
                  />
                  </p>
                </div>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <div className="service-box">
                <div id="x">
                  <img src="/static/images/bits.png"  />
                  </div>
                  <h3>
                  <Service name= {strings.home.services.blockchain.heading} description={strings.home.services.blockchain.content}/>
                    <TranslateText
                    text= {strings.home.services.blockchain.heading}
                  />
                    </h3>
                  <p>
                
                  <TranslateText
                    text=   {strings.home.services.blockchain.content}
                  />
                  </p>
                </div>
              </Col>
            </Row>
            
          </div>
        </Col>
      </Row>
      <style jsx>{`
        .service-box {
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding-bottom: 30px;
        }
        .service-box #x{
          width:200px;
          height:200px;
          background-color:yellow;
          border-radius:50%;
          align-self:center;
          padding:15%;

        }
        .service-box img {
          max-width: 300px;
          margin: 0 auto 30px;
          width:100%;
        }
        .service-box h3 {
          text-align: center;
          font-size: 20px;
          text-transform: uppercase;
        }
        .service-box p {
          padding-left: 30px;
          padding-right: 30px;
        }
   
      `}</style>
    </Layout>
  );
}

export default Services;
