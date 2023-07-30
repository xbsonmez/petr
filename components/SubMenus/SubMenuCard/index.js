import React from 'react';
import {useRouter} from 'next/router';


export default function SubMenuCard(prop) {
    
    const {title, icon} = prop.item;

    const router = useRouter();

    const onClickFunc = ()=> {
        router.push({ pathname: '/hair-transplant',
        query: { ...router.query },
      }, { scroll: false });
    };
    return (
        <div className="subMenu-card-container" onClick={onClickFunc}>
            <div><img src={'/menu-icon/'+ icon} style={{width:'32px',height:'32px',borderRadius:'10px', background:'#cd832b'}}/></div>
           <div><span>{title}</span></div>
           
        </div>
    );
}