import React from 'react';
import Router from 'next/router';


export default function SubMenuCard(prop) {
    
    const {title, icon} = prop.item;

    const onClickFunc = ()=> {
        Router.push('/hair-transplant');
        window.scrollTo({top });
    };
    return (
        <div className="subMenu-card-container" onClick={onClickFunc}>
            <div><img src={'/menu-icon/'+ icon} style={{width:'32px',height:'32px',borderRadius:'10px', background:'#cd832b'}}/></div>
           <div><span>{title}</span></div>
           
        </div>
    );
}