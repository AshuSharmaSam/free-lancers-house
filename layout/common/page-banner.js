import React from "react";
import { Layout, Row, Col, Icon } from "antd";
import { designConstants } from "../../static/themeDesign";
function PageBanner(props) {
  return (
    <Layout>
      <Row>
        <Col span={24}>
          <div
            className="page-banner"
            style={{ backgroundImage: `url(${props.bannerImage})` }}
          >
            
            <div className="container">
              <h1>{props.heading}</h1>
              <h4>{props.subHeading}</h4>
            </div>
          </div>
        </Col>
      </Row>

      <style jsx>{`
        .page-banner {
          height: 500px;
          overflow: hidden;
          margin-top: 100px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }

        .page-banner h1 {
          word-break: break-word;
          -ms-word-wrap: break-word;
          word-wrap: break-word;
          padding: 0px 0px 0px;
          line-height: 1;
          display: inline-block;
          margin: 0;
          color: ${designConstants.colors.white};
          font-weight: 300;
          font-family: "Fira Sans", sans-serif;
          text-transform: uppercase;
          font-size: 90px;
          z-index: 5;
          text-shadow: 1px 2px 2px ${designConstants.colors.red1};
        }
        .page-banner h4 {
          margin-top: 20px;
          margin-bottom: 0px;
          font-size: 22px;
          z-index: 5;
          color: ${designConstants.colors.white_opacity};
          line-height: 1.8;
          font-weight: 400;
          font-family: "Fira Sans", sans-serif;
          font-style: normal;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          text-shadow: 1px 1px 1px ${designConstants.colors.black_opacity};
        }
        @media (max-width: 992px) and (min-width: 768px) {
          .page-banner {
            height: 300px;
          }
          .page-banner h1 {
            font-size: 64px;
            padding: 0px 0px 0px 30px;
          }
          .page-banner h4 {
            font-size: 18px;
            padding: 0px 0px 0px 30px;
          }
        }
        @media (max-width: 768px) and (min-width: 320px) {
          .page-banner {
            margin-top: 0;
            height: 300px;
          }
          .page-banner h1 {
            font-size: 34px;
            padding: 0px 0px 0px 30px;
          }
          .page-banner h4 {
            font-size: 16px;
            padding: 0px 0px 0px 30px;
          }
        }
      `}</style>
    </Layout>
  );
}

export default PageBanner;
