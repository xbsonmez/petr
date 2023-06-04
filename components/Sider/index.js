
import React, {useRef, useEffect} from 'react';
import { Button } from 'antd';
import Link from 'next/link';
import { Menu} from 'antd';
import {useRouter} from 'next/router';
import tr from '@/statics/localization/tr';
import en from '@/statics/localization/en';

export default function Sider(prop) {
    const routerTemp = useRouter();
    const {locale, locales, defaultLocale} = routerTemp;

    const ref = useRef();

    const t = locale === 'en' ? en : tr;

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (prop?.isOpen && ref.current && !ref?.current?.contains(event.target)) {
            prop.changeStatus();
          }
        };
        document.addEventListener("mousedown", handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
          };
      }, [ref, prop]);

    return (
        <> 
    { (    
   <div className= {!prop?.isOpen ? 'sider-opened': 'sider' } ref={ref}>
       {prop?.isOpen && <img src="/vektor2-removebg.png" style={{width:220, height:100}}/> }
       {prop?.isOpen && (<div className='siderMenu'>

        <Menu theme="dark" mode="vertical">

        <Menu.Item key="1">
          <div className="header-item">
          <Button type="primary" className="button-primary" onClick={()=> { prop.changeStatus()}}>
            <Link href="/before-after">{t.beforeAfter}</Link>
          </Button>
        </div>
        </Menu.Item>

        <Menu.Item key="2">
          <div className="header-item">
          <Button type="primary" className="button-primary" onClick={()=> { prop.changeStatus()}}>
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
       </div>
       )}
   </div>
    
  ) }
   </>
    );
};