import React from "react";
import { Layout, Row, Col } from "antd";
import Link from "next/link";
import strings from "../../../static/lang/eng/eng.json";
import TranslateText from "../../common/translateText";
function Contact(props) {
  return (
    <Layout className="wrapper-section orange">
      <div className="page-section contact">
        <Row>
          <Col span={24} className="page-heading">
            <h2 className="white">
              
              <TranslateText
                    text={strings.home.contact.heading}
                  />
              </h2>
            <p className="white">
              
              <TranslateText
                    text={strings.home.contact.subheading}
                  />
              </p>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <div className="box-button-container">
              <Link href="/">
                <a>
                  
                  <TranslateText
                    text={strings.home.contact.button}
                  />
                  </a>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
      <style jsx>{`
       `}</style>
    </Layout>
  );
}

export default Contact;
