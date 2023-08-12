import React, { useState } from 'react';
import tr from '@/statics/localization/tr';
import en from '@/statics/localization/en';
import  {useRouter} from 'next/router';
import { Button } from 'antd';



export default function AboutUs() {
    const routerTemp = useRouter();
    const {locale} = routerTemp;

    const t = locale === 'en' ? en : tr;

    const aboutContent = t.aboutUsPetra;
    const length = t.aboutUsPetra.length;

    const[charLenght, setLength] = useState(300);

    const changeLength = ()=>{
        setLength(length);
    }

    const showMoreButton = ()=> {
        if(t.aboutUsPetra.length>charLenght){
            return <Button type="primary" className="button-primary" style={{right:10,position:'absolute', bottom:0, }} onClick={changeLength}> {t.showMore}</Button>
        } 
        return;
    };
    const aboutContentMOdify = aboutContent.slice(0, charLenght);
    return (
        <div className='about-us' style={{padding:'1rem', width:'95%'}}>
            <div> 
            <div style={{paddingBottom:30, position:'relative', display:'flex'}}> 
            <div style={{display:'flex', width:'55%', justifyContent:'center'}}>
            <img src="/vektor2-removebg.png" style={{width:350, height:210}}/>
            </div>
            <div style={{width:'45%'}} dangerouslySetInnerHTML={{__html:aboutContentMOdify}} />
            {showMoreButton()}
            </div>
            
            </div>

          
        </div>
    );
}