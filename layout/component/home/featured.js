import React from "react";
import { Layout, Row, Col } from "antd";
import Link from "next/link";
import strings from "../../../static/lang/eng/eng.json";
import TranslateText from "../../common/translateText";
import Images from "../../common/SeoComponent/image"
function Featured(props) {
  return (
    <Layout className="page-section featured">
      <Row>
        <Col span={24} className="page-heading">
          <h2 className="white">
          
            <TranslateText
                    text={strings.home.featured.heading}
                  />
            </h2>
          <p className="white">
            
            <TranslateText
                    text={strings.home.featured.subheading}
                  />
            </p>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div className="container">
            <Row>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <div className="featured-box">
                <Images image={strings.home.featured.img1.src} url={strings.home.featured.img1.url}/>
                <Link href={strings.home.featured.img1.url}>
                  
                  <img src={strings.home.featured.img1.src} />
                </Link>
                 
                </div>
                <div  className="box">
                 <h3>{strings.home.featured.img1.name}</h3>
                </div>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <div className="featured-box">
                <Images image={strings.home.featured.img2.src} url={strings.home.featured.img2.url}/>
                  <Link href={strings.home.featured.img2.url}>
                  
                  <img src={strings.home.featured.img2.src} />
                  </Link>
                </div>
                <div className="box">
                 <h3>{strings.home.featured.img2.name}</h3>
                </div>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <div className="featured-box">
                <Images image={strings.home.featured.img3.src} url={strings.home.featured.img3.url}/>
                <Link href={strings.home.featured.img3.url}>
                 
                  <img src={strings.home.featured.img3.src}/>
                </Link>
                  </div>
                <div  className="box">
                  <h3>{strings.home.featured.img3.name}</h3>
                </div>
              </Col>
            </Row>
              <Row>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <div className="featured-box">
                <Images image={strings.home.featured.img4.src} url={strings.home.featured.img4.url}/>
                <Link href={strings.home.featured.img4.url}>
            
                  <img src={strings.home.featured.img4.src}  />
                </Link>
                </div>
                <div  className="box">
                  <h3>{strings.home.featured.img4.name}</h3>
                </div>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <div className="featured-box"> 
                <Images image={strings.home.featured.img5.src} url={strings.home.featured.img5.url}/>
                <Link href={strings.home.featured.img5.url}>
                
                  <img src={strings.home.featured.img5.src} />
                 </Link>
 
                </div>
                <div className="box">
                  <h3>{strings.home.featured.img5.name}</h3>
                </div>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <div className="featured-box">
                <Images image={strings.home.featured.img6.src} url={strings.home.featured.img6.url}/>
                <Link href={strings.home.featured.img6.url}>
              
                  <img src={strings.home.featured.img6.src} />
                </Link>
                </div>
                <div className="box">
                  <h3>{strings.home.featured.img6.name} </h3>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      
      <Row>
        <Col span={24}>
          <div className="box-button-container">
            <Link href="/">
              <a>
                
                <TranslateText
                    text={strings.home.featured.portfolio}
                  />
                </a>
            </Link>
          </div>
        </Col>
      </Row>
      <style jsx>{`
        .featured-box {
          display: flex;
          justify-content: center;
          flex-direction: column;
          height:200px;
          width:400px;
          overflow: hidden;
         
        }
        .box h3{
          text-align:center;
          justify-content:center;
          overflow:hidden;
          color:white;
        }
        .featured-box img {
          width: 100%;
          padding: 10px;
          transform-origin: 0 0;
          transition: transform .25s, visibility .25s ease-in;
          transform-origin: center center;
        
           }
        .featured-box :hover img{
          transform: scale(1.2);
         
        }
      `}</style>
    </Layout>
  );
}

export default Featured;
