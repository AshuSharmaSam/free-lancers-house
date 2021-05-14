import Link from "next/link";
import { Layout, Row, Col } from "antd";
import strings from "../../../static/lang/eng/eng.json";
import TranslateText from "../../common/translateText";
import { designConstants } from "../../../static/themeDesign";
import Images from "../../common/SeoComponent/image";
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
      <style jsx global>{`
        .ant-row {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: horizontal;
          -webkit-box-direction: normal;
          -ms-flex-flow: row wrap;
          flex-flow: row wrap;
        }
        .ant-row-middle {
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
        }
        h1 {
          text-transform: uppercase;
        }
        h2 {
          color: rgba(2, 2, 2, 0.46);
          text-transform: normal;
        }
        p {
        }
        .button a {
          font-family: "PT Sans Narrow", Sans-serif;
          font-size: 17px;
          font-weight: 400;
          line-height: 1.3em;
          fill: ${designConstants.colors.dark_gray};
          color: ${designConstants.colors.dark_gray};
          background-color: ${designConstants.colors.bright_yellow};
          border-radius: 0px 0px 0px 0px;
          padding: 17px 25px 17px 25px;
          display: inline-block;
        }
        .pl50 {
          padding-left: 50px;
        }
        @media (max-width: 767px) {
          .pl50 {
            padding: 0;
          }
        }
      `}</style>
    </Layout>
  );
}
