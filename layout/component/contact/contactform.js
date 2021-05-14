import React from 'react';
import { Layout, Row, Col, Form, Input, Select, Button } from "antd";
import strings from "../../../static/lang/eng/eng.json";
import TranslateText from "../../common/translateText";
import Images from "../../common/SeoComponent/image";
import { designConstants } from "../../../static/themeDesign.js";
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
      <style jsx global>{`
        .contact-form {
          background: ${designConstants.colors.white};

          padding: 50px;
          border-radius: 5px;
          margin-left: 50px;
        }
        .ant-select-selection--single,
        .ant-select-selection-selected-value,
        .ant-input {
          height: 44px;
          line-height: 44px;
        }
        form .ant-mentions,
        form textarea.ant-input {
          height: 150px;
        }
        h1 {
          text-transform: uppercase;
          margin-top: 50px;
        }

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
        .ant-btn-primary {
          background: ${designConstants.colors.bright_yellow};
          font-family: "PT Sans Narrow", Sans-serif;
          font-size: 17px;
          font-weight: 400;
          line-height: 1.3em;
          fill:  ${designConstants.colors.dark_gray};
          color:  ${designConstants.colors.dark_gray};
          background-color: ${designConstants.colors.bright_yellow};
          border-radius: 0px 0px 0px 0px;
          padding: 17px 25px 17px 25px;
          display: inline-block;
          height: auto;
          border: 0;
        }
        .ant-select-selection:hover,
        .ant-input:hover {
          border-color: ${designConstants.colors.bright_yellow};
          border-right-width: 1px !important;
        }
        .ant-input:focus {
          border-color: ${designConstants.colors.bright_yellow};
        }
        .ant-select-selection:active,
        .ant-select-selection:focus,
        .ant-input:focus {
          border-color: ${designConstants.colors.bright_yellow};
          border-right-width: 1px !important;
          outline: 0;
          -webkit-box-shadow: 0 0 0 2px  ${designConstants.colors.bright_yellow_opacity};
          box-shadow: 0 0 0 2px ${designConstants.colors.bright_yellow_opacity};
        }
        .ant-select-dropdown-menu-item:hover:not(.ant-select-dropdown-menu-item-disabled) {
          background-color:${designConstants.colors.bright_yellow_opacity};
        }

        .ant-btn:active,
        .ant-btn.active {
          border-color:${designConstants.colors.bright_yellow};
        }
        .ant-btn-primary:hover,
        .ant-btn-primary:focus,
        .ant-btn:hover,
        .ant-btn:focus {
          border-color: ${designConstants.colors.bright_yellow};
          background: ${designConstants.colors.bright_yellow};
        }
      `}</style>
    </Layout>
  );
};
export default Contactform;
