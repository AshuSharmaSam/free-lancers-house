import * as React from "react";
import { Layout, Menu, Row, Col } from "antd";

import "../../static/style/style.scss";
import strings from "../../static/lang/eng/eng.json";

import { designConstants } from "../../static/themeDesign";
const { SubMenu } = Menu;
const { Header } = Layout;

import { useRouter } from "next/router";
import Link from "next/link";


const  HeaderComponent=()=> {
  
  const router = useRouter();
    
    return (
     
      <Layout>
        <Header >
          
          <Row >
            <Col span={24}>
            <nav className="header-container" style={{justifyContent:"start"}}>
           
                <ul className="desktop-nav" >
                  <li className="ab">
                    <Link href="/">
                      <img  style={{width:"100%"}} src="/static/images/logo1.png" />
                    </Link>
                    </li>
                   <li className={router.asPath == "/" ? "active" : ""}>
                      <Link href="/">
                        {strings.header.home}
                  
                      </Link>
                   </li>
                   <li className={router.asPath == "/about" ? "active" : ""}>
                      <Link href="/about">
                      
                       {strings.header.about}
                      
                      </Link>
                    </li>
                   <li className="logo">
                     <Link href="/">
                      <img  style={{width: "100%"}} src="/static/images/logo.png" />
                     </Link>
                    </li>
                  <li className={router.asPath == "/portfolio" ? "active" : ""} >
                    <Link href="/portfolio" >
                      <a>
                        
                      {strings.header.portforlio}
                      
                        </a>
                    </Link>
                  </li>
                  <li className={router.asPath == "/contact" ? "active" : ""}>
                    <Link href="/contact">
                      <a>
                        
                       {strings.header.contact}
                      
                        </a>
                    </Link>
                  </li>
                </ul>
                <ul className="mobile-nav">
                  <li className="logo" >
                    <Link href="/">
                      <img  style={{width:"33%"}} src="/static/images/logo.png"  />
                    </Link>
                  </li>
                </ul>
              </nav>
            </Col>
          </Row>
        </Header>
        <Menu mode="inline" className="mobile-drop-menu">
          <SubMenu
            key="sub1"
            title={
              <span className="menu">
                <span></span>
                <span></span>
                <span></span>
              </span>
            }
          >
            <Menu.Item key="1">
              <Link href="/">
                
                {strings.header.home}
                      
                </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link href="/about">
                {strings.header.about}
                
                </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link href="/portfolio">
                
                {strings.header.portforlio}
                      
                </Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link href="/contact">
                {strings.header.contact}
                      
                </Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
        <style jsx global>{`
          //-----------------------
          // Font Style
          //-----------------------
          h1 {
            font-size: 36px;
          }
          h2 {
            font-size: 22px;
          }
          p {
            font-size: 18px;
          }

          @media (max-width: 767px) {
            h1 {
              font-size: 26px;
            }
            h2 {
              font-size: 18px;
            }
            p {
              font-size: 16px;
            }
          }
          //-----------------------
          //page Container and Layout
          //-----------------------
          .container {
            width: 1200px;
            margin: 0 auto;
          }
          @media (max-width: 1200px) {
            .container {
              width: 100%;
              margin: 0 auto;
              padding: 0 10px;
            }
          }
          .wrapper-section {
            padding: 15px;
          }
          .wrapper-section.orange {
            background: ${designConstants.colors.orange};
          }

          .page-section {
            padding-bottom: 50px;
            padding-top: 70px;
          }
          .page-section.featured {
            background:${designConstants.colors.cinder};
          }
          .page-section.contact {
            background: ${designConstants.colors.orange};
            border-style: solid;
            border-width: 1px 1px 1px 1px;
            border-color:${designConstants.colors.white_opacity19};
            transition: background 0.3s, border 0.3s, border-radius 0.3s,
              box-shadow 0.3s;
            padding: 60px 0px 50px 0px;
          }

          //-----------------------
          //page heading
          //-----------------------
          .page-heading {
            text-align: center;
          }
          .page-heading h2 {
            font-size: 36px;
            text-transform: uppercase;
            letter-spacing: 0.7px;
          }
          .page-heading h2.white {
            color: ${designConstants.colors.white};
          }
          .page-heading h2.black {
            color:${designConstants.colors.very_dark_gray};
          }
          .page-heading p {
            opacity: 0.7;
            color: ${designConstants.colors.white};
            font-size: 18px;
            text-transform: uppercase;
            letter-spacing: 7px;
          }
          .page-heading p.white {
            color: ${designConstants.colors.white};
          }
          .page-heading p.black {
            color: ${designConstants.colors.black};
          }

          //-----------------------
          // page Button and Button Container
          //-----------------------
          .box-button-container {
            padding: 15px 0;
            text-align: center;
          }
          .box-button-container a {
            font-family: "PT Sans Narrow", Sans-serif;
            font-size: 17px;
            font-weight: 400;
            line-height: 1.3em;
            fill:${designConstants.colors.very_dark_gray};
            color: ${designConstants.colors.very_dark_gray};
            background-color: ${designConstants.colors.bright_yellow};
            border-radius: 0px 0px 0px 0px;
            padding: 17px 25px 17px 25px;
            display: inline-block;
          }
          . img {
            width:100%;
          }
        `}</style>
      </Layout>
    );
  
}
export default HeaderComponent