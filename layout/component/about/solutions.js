import Link from "next/link";
import { Layout, Row, Col, Icon } from "antd";
import strings from "../../../static/lang/eng/eng.json";
import TranslateText from "../../common/translateText";
import { designConstants } from "../../../static/themeDesign";
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
      <style jsx global>{`
        .sol-container i {
          font-size: 24px;
        }
        .sol-container {
          padding: 40px;
          border: 1px solid ${designConstants.colors.lightshade_gray};
          border-radius: 4px;
          margin: 0 20px;
        }
        .sol-container h4 {
          line-height: 36px;
          font-size: 22px;
          font-weight: 600;
          color: ${designConstants.colors.raisin_black};
        }
      `}</style>
    </Layout>
  );
}
