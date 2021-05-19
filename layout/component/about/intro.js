import Link from "next/link";
import { Layout, Row, Col } from "antd";
import strings from "../../../static/lang/eng/eng.json";
import TranslateText from "../../common/translateText";
import { designConstants } from "../../../static/themeDesign";
import Images from "../../common/SeoComponent/image";
import "../../../static/style/style.scss";
export default function Intro() {
  return (
    <Layout className="page-section">
      <div className="container">
        <Row className="ant-row-middle">
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div className="image-container">
              <Images image="/static/images/about.png" />
              <img src="/static/images/about.png" />
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div className="pl50">
              <p>
              <TranslateText
                    text= {strings.about.heading}
                  />
              </p>
              <h1><TranslateText
                    text= {strings.about.intro.subheading}
                  />
              </h1>
              <h2>
               <TranslateText
                    text= {strings.about.intro.content1}
                  />
              </h2>
              <p>
               <TranslateText
                    text= {strings.about.intro.content2}
                  />
              </p>
              <span className="button">
                <Link href="/contact">
                  <TranslateText
                    text={strings.about.intro.touch}
                  />
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </div>
      
    </Layout>
  );
}
