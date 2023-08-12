import React from 'react';
import {useRouter} from 'next/router';
import tr from '@/statics/localization/tr';
import en from '@/statics/localization/en';

export default function SubMenuCard(prop) {
    const routerTemp = useRouter();
    const {locale} = routerTemp;

    const t = locale === 'en' ? en : tr;

    const {title, icon, link} = prop.item;

    const router = useRouter();

    const onClickFunc = ()=> {
        router.push(link);
    };
    return (
        <div className="subMenu-card-container" onClick={onClickFunc}>
            <div><img src={'/menu-icon/'+ icon} style={{width:'32px',height:'32px',borderRadius:'10px', background:'#cd832b'}}/></div>
           <div><span>{t?.[title]}</span></div>
           
        </div>
    );
}