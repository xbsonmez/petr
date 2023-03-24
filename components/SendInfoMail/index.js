import React, { useState } from "react";
import axios from 'axios';
import {
    Row,
    Col,
    Form,
    Input,
    Button,
  } from 'antd';
import { UserOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';




export default function SendInfoMail(prop) {

    const [form] = Form.useForm();

    const [submitted, setSubmitted] = useState(false);

    const sendMail = async (value) => {
        let config = {
            method: 'post',
            url: `/api/contact`,
            headers: {
              'Content-Type': 'application/json',
            },
            data: value,
          };
      
          try {
            const response = await axios(config);
            console.log(response);
            if (response.status == 200) {
                setSubmitted(true);
            }
          } catch (err) {
            console.error(err);
            setSubmitted(false);
            
          }
      };

    const onFinish = (values) => {
       console.log('send MAil', values);
       sendMail(values);
       form.resetFields();
      };

    return (
        <div className="mail">
        {!submitted ?  
        <Form id="requestForm" form={form} className="form form--vertical" onFinish={onFinish}>

          <Row gutter={20}>
          <Col xs={24} sm={12} md={12} lg={6}>
            <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                    message:prop?.t?.emptyError,
                  },
                ]}
              >
                <Input size="large" autoComplete="off"  placeholder={prop?.t?.fullName} suffix={<UserOutlined />} />
              </Form.Item>
            </Col>


            <Col xs={24} sm={12} md={12} lg={6}>
              <Form.Item
                name="email"
                rules={[{ required: false,  message:prop?.t?.emptyError, }]}
              >
                 <Input size="large" autoComplete="off"  type= "email" placeholder={'E-mail'}  suffix={<MailOutlined />}/>
              </Form.Item>
            </Col>

            <Col xs={24} sm={12} md={12} lg={6}>
              <Form.Item name="phone" 
              rules={[{ required: true,  min: 1,
                max: 16,
                message:prop?.t?.emptyError,}]}
                >

              <Input size="large" autoComplete="off" className="hidden-arrows" type="number"  placeholder={prop?.t?.phoneNumber} suffix={<PhoneOutlined />} 
              onChange={(e)=> {e.target.value.trim().substring(0, 16)} } />
              </Form.Item>
            </Col>

            <Col xs={24} sm={12} md={12} lg={6}>
              <Form.Item className="margin-top-10">
                <Button type="primary" htmlType="submit" className={'submitBtn'}>
                  Gönder
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
        : <div>
             <img src="/checked.png" style={{width:90, height:90}}/>
          </div>}
        </div>
    );
}