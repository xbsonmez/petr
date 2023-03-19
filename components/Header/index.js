import React from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Button } from 'antd';
import Link from 'next/link';
import { Layout, Menu} from 'antd';
import Router, {useRouter} from 'next/router';
import tr from '@/statics/localization/tr';
import en from '@/statics/localization/en';
import { Select } from 'antd';


export default function Header() {
    const { Header } = Layout;
    const routerTemp = useRouter();
    const {locale, locales, defaultLocale} = routerTemp;

    const t = locale === 'en' ? en : tr;


    const onClickLogo = () => {
      Router.push('/');
    };

    const changeLanguage = e => {

      const locale = e;
      routerTemp.push('/','/',{locale});

    }

    return (
      <Header style={{background: 'linear-gradient(159deg, rgba(7,8,8,1) 0%, rgba(75,79,85,1) 49%, rgba(127,132,140,1) 100%)', display: 'flex', flexDirection: 'row', position: 'fixed', zIndex: 9, width: '100%'}}>
        <div className="logo">  
        <div className="image" onClick={onClickLogo} >
        <img src="/vektor2-removebg.png" style={{width:120, height:60}}/>
         </div>
            <Link href="/">{'Petra Hair Transplant'}</Link>
        </div> 
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>

        <Menu.Item key="1">
          <div className="header-item">
          <Button type="primary" className="button-primary">
            <Link href="/before-after">{t.beforeAfter}</Link>
          </Button>
        </div>
        </Menu.Item>

        <Menu.Item key="2">
          <div className="header-item">
          <Button type="primary" className="button-primary">
            <Link href="/about">{t.aboutUs}</Link>
          </Button>
        </div>
        </Menu.Item>

      </Menu>

      <Select 
      className='select-box-langugage' 
      defaultValue={defaultLocale} 
      onChange={changeLanguage}
      options={
        [
          {value:'en', label:'EN'},
          {value:'tr', label:'TR'}
        ]
      } 
      />
      </Header>

    );
}