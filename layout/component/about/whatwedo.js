
import { Layout, Row, Col } from "antd";
import { Collapse } from "antd";
import strings from "../../../static/lang/eng/eng.json";
import TranslateText from "../../common/translateText";
import { designConstants } from "../../../static/themeDesign";
import Service from "../../common/SeoComponent/services"
import Images from "../../common/SeoComponent/image";
const { Panel } = Collapse;

export default function Whatwedo() {
  return (
    <Layout className="page-section">
      <Row className="ant-row-middle">
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={12}
          className="dark-background"
        >
          <div className="whatwedo-list">
            <p>
              
              <TranslateText
                    text=  {strings.about.wedo.heading}
                  />
              </p>
            <h2>
              
            <TranslateText
                    text=  {strings.about.wedo.subheading}
                  />
              </h2>
            <p>
              
              
              <TranslateText
                    text=  {strings.about.wedo.subheading2}
                  />
            </p>
            <Collapse bordered={false} defaultActiveKey={["1"]}  accordion>
              <Panel header="WEB DEVELOPMENT" key="1">
                <Collapse defaultActiveKey="1">
                <Service name= "FRONT END TECHNOLOGY"/>
                  <Panel header="FRONT END TECHNOLOGY" key="1">
                    <Collapse defaultActiveKey="1">
                      <Panel header="REACT JS" key="1" >
                        <p style={{color:"black"}}>
                        <Service name= {"REACT JS"} description={strings.about.react.heading}/>
                          <TranslateText 
                          text=  {strings.about.react.heading}
                          />
                        </p>
                      </Panel>
                      <Panel header="ANGULAR" key="2">
                        <p style={{color:"black"}}>
                        <Service name= {"ANGULAR"} description={strings.about.angular.heading}/>
                          <TranslateText 
                          text=  {strings.about.angular.heading}
                          />
                        </p>
                      </Panel>
                      <Panel header="HTML" key="3">
                        <p style={{color:"black"}}>
                        <Service name= {"HTML"} description={strings.about.html.heading}/>
                          <TranslateText 
                          text=  {strings.about.html.heading}
                          />
                        </p>
                      </Panel>
                      <Panel header="CSS/SCSS" key="4">
                        <p style={{color:"black"}}>
                        <Service name= {"CSS"} description={strings.about.css.heading}/>
                          <TranslateText 
                          text=  {strings.about.css.heading}
                          />
                        </p>
                      </Panel>
                      <Panel header="J-QUERY" key="5">
                        <p style={{color:"black"}}>
                        <Service name= {"J-QUERY"} description={strings.about.jquery.heading}/>
                          <TranslateText 
                          text=  {strings.about.jquery.heading}
                          />
                        </p>
                     </Panel>
                     <Panel header="VUE" key="6">
                       <p style={{color:"black"}}>
                       <Service name= {"VUE"} description={strings.about.vue.heading}/>
                         <TranslateText 
                         text=  {strings.about.vue.heading}
                         />
                       </p>
                     </Panel>
                     <Panel header="NEXT JS" key="7">
                       <p style={{color:"black"}}>
                       <Service name= {"Next Js"} description={strings.about.next.heading}/>
                         <TranslateText 
                         text=  {strings.about.next.heading}
                         />
                       </p>
                     </Panel>
                     <Panel header="PHP" key="7">
                       <p style={{color:"black"}}>
                       <Service name= {"PHP"} description={strings.about.php.heading}/>
                         <TranslateText 
                          text=  {strings.about.php.heading}
                           />
                        </p>
                     </Panel>
                     <Panel header="JAVASCRIPT" key="9">
                       <p style={{color:"black"}}>
                       <Service name= {"JAVASCRIPT"} description={strings.about.javascript.heading}/>
                         <TranslateText 
                          text=  {strings.about.javascript.heading}
                           />
                       </p>
                     </Panel>
                   </Collapse>  
                 </Panel>
               </Collapse>
               <Collapse defaultActiveKey="1">
               <Service name= {"BACK END TECHNOLOGY"}/>
                 <Panel header="BACK END TECHNOLOGY" key="2">
                   <Collapse defaultActiveKey="1">
                     <Panel header="NODE JS" key="1">
                     <Service name= {"NODE JS"} description={strings.about.node.heading}/>
                       <p style={{color:"black"}}>
                         <TranslateText 
                         text=  {strings.about.node.heading}
                         />
                        </p>
                     </Panel>
                     <Panel header="JAVA" key="2">
                       <p style={{color:"black"}}>
                       <Service name= {"JAVA"} description={strings.about.java.heading}/>
                         <TranslateText 
                          text=  {strings.about.java.heading}
                          />
                        </p>
                     </Panel>
                     <Panel header="SCALA" key="3">
                        <p style={{color:"black"}}>
                        <Service name= {"SCALA"} description={strings.about.scala.heading}/>
                          <TranslateText 
                           text=  {strings.about.scala.heading}
                           />
                        </p>
                      </Panel>
                      <Panel header="LARAVEL" key="4">
                        <p style={{color:"black"}}>
                        <Service name= {"LARAVEL"} description={strings.about.laravel.heading}/>
                          <TranslateText 
                           text=  {strings.about.laravel.heading}
                           />
                        </p>
                     </Panel>
                     <Panel header="J-QUERY" key="5">
                       <p style={{color:"black"}}>
                       <Service name= {"J-QUERY"} description={strings.about.jquery.heading}/>
                         <TranslateText 
                         text=  {strings.about.jquery.heading}
                         />
                        </p>
                     </Panel>
                     <Panel header="PYTHON" key="7">
                       <p style={{color:"black"}}>
                       <Service name= {"PYTHON"} description={strings.about.python.heading}/>
                         <TranslateText 
                          text=  {strings.about.python.heading}
                          />
                       </p>
                     </Panel>
                     <Panel header="MONGODB" key="7">
                     <Service name= {"MONGODB"} description={strings.about.mong.heading}/>
                       <p style={{color:"black"}}>
                         <TranslateText 
                         text=  {strings.about.mong.heading}
                         />
                       </p>
                     </Panel>
                     <Panel header="SQL" key="9">
                       <p style={{color:"black"}}>
                       <Service name= {"SQL"} description={strings.about.sql.heading}/>
                         <TranslateText 
                         text=  {strings.about.sql.heading}
                         />
                       </p>
                     </Panel>
                    </Collapse> 
                  </Panel>
                </Collapse>
              </Panel>
              <Service name= {"MOBILE APP DEVELOPMENT"} />
              <Panel header="MOBILE APP DEVELOPMENT" key="2">
                <Collapse defaultActiveKey="1">
                <Panel header="REACT NATIVE" key="1">
                    <p style={{color:"black"}}>
                    <Service name= {"REACT NATIVE"} description={strings.about.native.heading}/>
                      <TranslateText 
                      text=  {strings.about.native.heading}
                      />
                    </p>
                  </Panel>
                  <Panel header="FLUTTER" key="2">
                    <p style={{color:"black"}}>
                    <Service name= {"FLUTTER"} description={strings.about.flutter.heading}/>
                      <TranslateText 
                      text=  {strings.about.flutter.heading}
                      />
                    </p>
                  </Panel>
                  <Panel header="IONIC ANDROID IOS" key="3">
                    <p style={{color:"black"}}>
                    <Service name= {"IONIC ANDROID IOS"} description={strings.about.android.heading}/>
                      <TranslateText 
                       text=  {strings.about.android.heading}
                       />
                    </p>
                  </Panel>
                  
                </Collapse> 
              </Panel>
              <Panel header="BLOCKCHAIN" key="3">
              <Service name= {"BLOCKCHAIN"} description={strings.about.block.heading}/>
                 <TranslateText 
                    text=  {strings.about.block.heading}
                  />
              </Panel>
            </Collapse>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div className="image-container">
            <Images image="/static/images/whatwedo.jpg"/>
            <img src="/static/images/whatwedo.jpg" />
          </div>
        </Col>
      </Row>

      <style jsx global>{`
        .whatwedo-list {
          float: right;
          width: 500px;
          padding: 100px 50px 100px 0;
          color: ${designConstants.colors.white};
        }
        .whatwedo-list h2 {
          text-transform: uppercase;
          color: ${designConstants.colors.white};
          font-size: 36px;
        }
        .whatwedo-list .ant-collapse {
          background: transparent;
        }
        .ant-collapse-borderless > .ant-collapse-item {
          border: 0;
          margin-bottom: 15px;
        }
        .whatwedo-list .ant-collapse .ant-collapse-header {
          color:${designConstants.colors.white};
          font-size: 18px;
          font-weight: bold;
          background: hsl(236, 19%, 18%);
        }
        .whatwedo-list .ant-collapse .ant-collapse-content {
          color:${designConstants.colors.white};
          font-size: 18px;
        }

        @media (max-width: 1150px) and (min-width: 992px) {
          .whatwedo-list {
            width: 100%;
            padding: 40px 20px;
          }
        }
        @media (max-width: 991px) and (min-width: 768px) {
          .whatwedo-list {
            width: 100%;
            padding: 40px 20px;
          }
        }
        @media (max-width: 767px) {
          .whatwedo-list {
            width: 100%;
            padding: 40px 20px;
          }
        }
      `}</style>
    </Layout>
  );
}
