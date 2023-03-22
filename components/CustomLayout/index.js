import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Layout } from 'antd';
import Header from '../Header';
import Whatsapp from '../Whatsapp';
import Sider from '../Sider';
import React, { useState } from 'react';


const CustomLayout = ({children}) =>{

  const [isOpen, setOpen] = useState(false);

  const changeStatus = () =>{
    debugger;
    setOpen(!isOpen);
  };
    return (
        <Layout className="layout">
          <Header changeStatus={changeStatus}/>
          <Sider isOpen={isOpen} changeStatus={changeStatus}/>
          {children}
          <Whatsapp />
        </Layout>
  );
}

export default CustomLayout;
