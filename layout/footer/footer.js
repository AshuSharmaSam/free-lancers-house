import React from "react";
import { Layout, Row, Col, Icon } from "antd";
const { Footer } = Layout;
import strings from "../../static/lang/eng/eng.json";
import TranslateText from "../common/translateText";
import Address from "../common/SeoComponent/address"
import { designConstants } from "../../static/themeDesign";
import {LinkedinFilled ,FacebookFilled,InstagramFilled}  from '@ant-design/icons';
import Link from "next/link";
function FooterPage(props) {
  return (
    <Layout>
      <Footer>
        <Row>
          <Address streetAddress={strings.footer.address.line}/>
          <Col span={24}>
            <div className="container">

              <Row>
                <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                  <div className="footer-section">
                    <h4>
                      
                      <TranslateText
                      text={strings.footer.address.heading}
                      />
                      </h4>
                    <p>
                    
                   
                    <TranslateText
                      text= {strings.footer.address.line}
                      />
                    
                      <br />
                      
                      <TranslateText
                      text= {strings.footer.address.city}
                      />
                    </p>
                    
                  </div>
                </Col>
                <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                  <div className="footer-section">
                    <h4>
                     
                      <TranslateText
                      text=    {strings.footer.phone.heading}
                      />
                      </h4>
                    <p>
                      
                      <TranslateText
                      text=    {strings.footer.phone.number}
                      />
                      </p>
                  </div>
                </Col>
                <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                  <div className="footer-section">
                    <h4>
                     
                      
                      <TranslateText
                      text=  {strings.footer.email.heading}
                      />
                    </h4>
                    <p>
                      
                      <TranslateText
                      text= {strings.footer.email.id}
                      />
                      </p>
                  </div>
                </Col>
                <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                  <div className="footer-section">
                    <h4>
                      
                      <TranslateText
                      text={strings.footer.followus}
                      />
                      </h4>
                    <p>
                    <Link href="https://www.facebook.com/">
                      <FacebookFilled  style={{ fontSize: '30px', color: '#3b5998 ' }}/>
                    </Link>
                    <Link href="https://www.Linkedin.com/">
                    <LinkedinFilled  style={{ fontSize: '30px', color: '#0077b5' }}/>
                    </Link>
                    <Link href="https://www.Instagram.com/">
                    <InstagramFilled  style={{ fontSize: '30px', color: '#cd486b' }}/>
                    </Link>
                      
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Footer>
      <div className="copy">
        
         
        <TranslateText
         text={strings.footer.ending}
        />
      </div>
      <style jsx>{`
        .footer-section h4 {
          color: ${designConstants.colors.dark_gray};
          font-family: "Fira Sans", Sans-serif;
          font-size: 15px;
          font-weight: 700;
          text-transform: uppercase;
        }
        .footer-section p {
          font-size: 15px;
          font-weight: 300;
        }

        .copy {
          background-color: ${designConstants.colors.bright_gray};
          display: block;
          text-align: center;
          padding: 50px 0;
        }
      `}</style>
    </Layout>
  );
}

export default FooterPage;
