import React from 'react';
import SubMenuCard from './SubMenuCard';
import {subMenuItems} from '@/statics/constants';


export default function SubMenus() {

    return (
        <div className="subMenu-container">
           { subMenuItems.map((e, index, ) => 
                {
                    return(<SubMenuCard key={index} item={e} /> )})
           }
        </div>
    );
}