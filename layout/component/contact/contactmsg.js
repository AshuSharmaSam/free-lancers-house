import React from "react";
import { Layout, Row, Col } from "antd";
import Link from "next/link";
import strings from "../../../static/lang/eng/eng.json";
import TranslateText from "../../common/translateText";
import { designConstants } from "../../../static/themeDesign.js";

function ContactMsg(props) {
  return (
    <Layout className="wrapper-section orange">
      <div className="page-section contact">
        <div className="container">
          <Row gutter={16}>
            <Col className="gutter-row" xs={24} sm={24} md={12} lg={12} xl={12}>
              <h2>
                
                <TranslateText
                    text={strings.contact.msg.msg1.heading}
                  />
                </h2>
              <p>
              
              <TranslateText
                    text={strings.contact.msg.msg1.content}
                  />
              </p>
            </Col>
            <Col className="gutter-row" xs={24} sm={24} md={12} lg={12} xl={12}>
              <h2>{strings.contact.msg.msg2.heading}</h2>
              <p>
              
              <TranslateText
                    text={strings.contact.msg.msg2.content}
                  />
              </p>
            </Col>
          </Row>
        </div>
      </div>
      <style jsx>{`
        h2 {
          font-size: 30px;
          text-transform: uppercase;
          color:${designConstants.colors.white};
        }
        p {
          color: ${designConstants.colors.white};
          padding: 0 40px 0 0;
        }
        @media (max-width: 767px) {
          p {
            padding: 0;
          }
        }
      `}</style>
    </Layout>
  );
}

export default ContactMsg;
