import React from "react";
import { Layout, Row, Col } from "antd";
import Link from "next/link";
import TranslateText from "../../common/translateText";
import strings from "../../../static/lang/eng/eng.json";
import { designConstants } from "../../../static/themeDesign";
function Testimonials(props) {
  return (
    <Layout className="page-section">
      <Row>
        <Col span={24} className="page-heading">
          <h2 className="black">
          
            <TranslateText
                    text=    {strings.home.testimonials.heading}
                  />
            </h2>
          <p className="black">
           
            <TranslateText
                    text=   {strings.home.testimonials.subheading}
                  />
            </p>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div className="container">
            <Row>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <div className="testimonial-box-container">
                  <div className="testimonial-box">
                    <img src="/static/images/banner/image1.jpg" />
                    <h3 className="agent-name">
                      
                      <TranslateText
                      text= {strings.home.testimonials.client1.name}
                      />
                      </h3>
                    <p className="agent-type">
                     
                      <TranslateText
                      text= {strings.home.testimonials.client1.profession}
                      />
                      </p>
                    <p className="agent-comment">
                  
                    <TranslateText
                      text=   {strings.home.testimonials.client1.reviews}
                      />
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <div className="testimonial-box-container">
                  <div className="testimonial-box">
                    <img src="/static/images/banner/image2.jpg" />
                    <h3 className="agent-name">
                  
                      <TranslateText
                      text=     {strings.home.testimonials.client2.name}
                      />
                      </h3>
                    <p className="agent-type">
                      
                      
                      </p>
                    <p className="agent-comment">
                  
                    <TranslateText
                      text=   {strings.home.testimonials.client2.reviews}
                      />
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <style jsx>{`
        .testimonial-box-container {
          padding: 50px 30px 30px;
        }
        .testimonial-box-container .testimonial-box {
          box-shadow: 0px 0px 11px 0px ${designConstants.colors.black_opacity7};
          transition: background 0.3s, border 0.3s, border-radius 0.3s,
            box-shadow 0.3s;
          padding: 0px 35px 20px 35px;
          text-align: center;
        }
        .testimonial-box-container .testimonial-box img {
          width: 67px;
          height: 67px;
          border-radius: 100px 100px 100px 100px;
          box-shadow: 0px 0px 10px 0px ${designConstants.colors.black_opacity14};
          margin: -30px 0 25px 0;
        }
        .testimonial-box-container .testimonial-box h3 {
          font-size: 25px;
          padding: 0;
          margin: 0 0 10px 0;
          line-height: 1;
        }
        .testimonial-box-container .testimonial-box p {
          display: block;
        }
        .testimonial-box-container .testimonial-box p.agent-type {
          color:  ${designConstants.colors.black_opacity44};
          font-size: 16px;
          margin-bottom: 35px;
        }
        .testimonial-box-container .testimonial-box p.agent-comment {
          color:  ${designConstants.colors.black_opacity5};
          font-style: italic;
          text-align: left;
        }
      `}</style>
    </Layout>
  );
}

export default Testimonials;
