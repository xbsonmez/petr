import React, {  useState, useEffect  } from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Button } from 'antd';
import Link from 'next/link';
import { Layout, Menu} from 'antd';
import Router, {useRouter} from 'next/router';
import tr from '@/statics/localization/tr';
import en from '@/statics/localization/en';
import { Select } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import styles from '@/styles/Home.module.css';


export default function Header(prop) {
    const { Header } = Layout;
    const routerTemp = useRouter();
    const {locale, locales, defaultLocale} = routerTemp;

    const t = locale === 'en' ? en : tr;

    const [defaultLang, setDefaultLang] = useState(null);

    useEffect(()=>{
      if (typeof window !== 'undefined') {
        localStorage.getItem('languagePetraHair')=== null && localStorage.setItem('languagePetraHair', defaultLocale);
        setDefaultLang(localStorage.getItem('languagePetraHair'));
      }
    },[]);
  
    const onClickLogo = () => {
      setTimeout(()=>{
        const element = document.getElementById('beginning');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      },200);
      routerTemp.push('/');

    };

    const changeLanguage = e => {
      const locale = e;
      localStorage.setItem('languagePetraHair', locale);
      routerTemp.push('/','/',{locale});

    };


    const scrollToContactWithUs = () => {
      Router.push('/');
      setTimeout(()=>{
        const element = document.getElementById('contactWithUSDiv');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      },200);
     
    };
  

    return (
      <> 
      <Header style={{background: 'linear-gradient(159deg, rgba(7,8,8,1) 0%, rgba(75,79,85,1) 49%, rgba(127,132,140,1) 100%)', display: 'flex', flexDirection: 'row', position: 'fixed', zIndex: 99, width: '100%'}}>
        <div className="logo">  
        <div className="image" onClick={()=>{onClickLogo()}} >
        <img src="/vektor2-removebg.png" style={{width:120, height:60}}/>
         </div>
            <Link className='logoTitle' href="/">{'Petra Hair Transplant'}</Link>
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

        <Menu.Item key="3">
          <div className="header-item">
          <Button type="primary" className="button-primary">
            <Link href="/hasta-yorumlari">{t.comments}</Link>
          </Button>
        </div>
        </Menu.Item>

      </Menu>
     
      {defaultLang &&
       <Select 
      className='select-box-langugage' 
      autoFocus={false}
      bordered={false}
      defaultValue={defaultLang} 
      onChange={changeLanguage}
      options={
        [
          {value:'en', label:'EN'},
          {value:'tr', label:'TR'}
        ]
      } 
      />
    }
     <div className='siderButton'>
      <MenuOutlined className='sider-toggler' onClick={()=>{prop?.changeStatus()}}/>
      </div>

      </Header>
      <Header style={{background: 'linear-gradient(159deg, rgba(7,8,8,1) 0%, rgba(75,79,85,1) 49%, rgba(127,132,140,1) 100%)', display: 'flex', flexDirection: 'row', position: 'fixed', zIndex: 99, width: '100%',marginTop:'64px'}} > 
      <div style={{flexDirection:'row', minHeight:'64px',padding:'0', color:'white', display:'flex', flexDirection:'row',textAlign:'center', width:'100%'}}>
          <div className={styles.contactWithUsTextArea}>
          <div style={{display:'flex', flexDirection:'row'}}><p>{t.starToHairAnalaysis}</p>
         <Button onClick={scrollToContactWithUs} style={{margin:'15px', backgroundColor:'#fccb6b', border:'1px solid white', color:'white', borderRadius:20}}>Hemen Tıkla!</Button></div>
          </div>
         
        </div>
      </Header>
      </>


    );
}