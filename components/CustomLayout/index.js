import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Layout } from 'antd';
import Header from '../Header';
import Whatsapp from '../Whatsapp';
import Sider from '../Sider';
import React, { useState } from 'react';
import Instagram from '../Instagram';
import Footer from '../Footer';


const CustomLayout = ({children}) =>{

  const [isOpen, setOpen] = useState(false);

  const changeStatus = () =>{
    setOpen(!isOpen);
  };
    return (
        <Layout className="layout">
          <Header changeStatus={changeStatus}/>
          <Sider isOpen={isOpen} changeStatus={changeStatus}/>
          {children}
          <Footer/>
          <Whatsapp />
          <Instagram />
        </Layout>
  );
}

export default CustomLayout;
