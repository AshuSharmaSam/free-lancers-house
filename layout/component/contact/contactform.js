import React from 'react';
import { Layout, Row, Col, Form, Input, Select, Button } from "antd";
import strings from "../../../static/lang/eng/eng.json";
import TranslateText from "../../common/translateText";
import Images from "../../common/SeoComponent/image";
import { designConstants } from "../../../static/themeDesign.js";
import "../../../static/style/style.scss";
//const {  Form, Input, Button,Select,Layout, Row, Col } = antd;
const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 }
};

const Contactform = () => {
  
  const onFinish = values => {
    console.log("Success:", values);
  };
  
  const validateMessages = {
    required: "This field is required!"
  };

  
  return (
    <Layout className="page-section">
      <div className="container">
        <Row className="ant-row-middle">
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <h1>
              
              <TranslateText
                    text={strings.contact.form.heading}
                  />
              </h1>
            <p>
             
              <TranslateText
                    text={strings.contact.form.content}
                  />
              </p>
            <div className="image-container">
              <Images image="/static/images/contacts.png"/>
              <img src="/static/images/contacts.png" alt="" />
            </div>
          </Col>
          <Col xs={24} sm={24} md={16} lg={16} xl={16}>
            <div className="contact-form">
              <Form
                {...layout}
                name="nest-messages"
                onClick={onFinish}
                validateMessages ={validateMessages }
                >
                <Row gutter={16}>
                  <Col
                    className="gutter-row"
                    xs={24}
                    sm={24}
                    md={12}
                    lg={12}
                    xl={12}
                  >
                    <Form.Item
                      name={["user", "name"]}
                      label="Name"
                      rules={[{ required: true,
                        message: 'Please input your name!',
                      
                      },
                    ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col
                    className="gutter-row"
                    xs={24}
                    sm={24}
                    md={12}
                    lg={12}
                    xl={12}
                  >
                    <Form.Item
                      name={["user", "email"]}
                      label="Email"
                      rules={[{ type: "email",
                      required: true,
                      message: 'Please input your email!',
                    
                    },
                  ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item label="Subject">
                  <Select>
                    <Select.Option value="demo">Query</Select.Option>
                    <Select.Option value="demo1">Suggestions</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item name={["user", "introduction"]} label="Introduction">
                  <Input.TextArea />
                </Form.Item>

                <Form.Item wrapperCol={{ ...layout.wrapperCol }}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
      
    </Layout>
  );
};
export default Contactform;
