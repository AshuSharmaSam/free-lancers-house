import Link from "next/link";
import { Layout, Row, Col, Icon } from "antd";
import strings from "../../../static/lang/eng/eng.json";
import TranslateText from "../../common/translateText";
import "../../../static/style/style.scss";
export default function Solutions() {
  return (
    <Layout className="page-section">
      <div className="container">
        <Row className="ant-row-middle">
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <div className="sol-container">
              <Icon type="facebook" theme="filled" />
              <h4>
              <TranslateText
                    text= {strings.about.solutions.content1.heading}
                  /> 
              </h4>
              <p>
               
                <TranslateText
                    text= {strings.about.solutions.content1.content}
                  />
              </p>
            </div>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <div className="sol-container">
              <Icon type="facebook" theme="filled" />
              <h4>
              <TranslateText
                    text= {strings.about.solutions.content2.heading}
                  />
              </h4>
              <p>
              <TranslateText
                    text= {strings.about.solutions.content2.content}
                  />
              </p>
            </div>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <div className="sol-container">
              <Icon type="facebook" theme="filled" />
              <h4>
              <TranslateText
                    text= {strings.about.solutions.content3.heading}
                  />
              </h4>
              <p>
             
              <TranslateText
                    text=  {strings.about.solutions.content3.content}
                  />
              </p>
            </div>
          </Col>
        </Row>
      </div>
      
    </Layout>
  );
}
