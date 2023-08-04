import React from 'react';
import tr from '@/statics/localization/tr';
import en from '@/statics/localization/en';
import Router, {useRouter} from 'next/router';
import Image from 'next/image';


export default function Footer() {

    const routerTemp = useRouter();
    const {locale, locales, defaultLocale} = routerTemp;

    const t = locale === 'en' ? en : tr;

    return (
        <div className="footer">
           <div style={{backgroundColor:'#4d525b'}}>
            <div style={{display:'flex', justifyContent:'center'}}>
                <img src='/vektor2-removebg.png' style={{width:'300px'}}/>
            </div>
            <div style={{borderTop:'1px solid',paddingTop:'12px', margin:'auto',padding:'0 10px', display:'grid', gap:'20px', gridTemplateColumns:'2fr 1fr 2fr', maxWidth:'1120px'}}>
                <div>
                    <a href="tel:+905318561585">
                        <h1>
                            <Image src="/phone.png" width="32" height="32" objectFit="cover"  alt="Petra Hair Transplant Phone"/>
                            +90 531 856 15 85
                        </h1>
                    </a>
                </div>
                <div style={{display:'flex', flexDirection:'row'}}> 
                    <div>
                        <h1><Image src="/location.png" width="44" height="44" objectFit="cover"  alt="Petra Hair Transplant Location"/>Ofis</h1>
                        <div>Atalar Mah. Köroğlu Cad. Emir Sk. No:2, D:2, 34862 Kartal/İstanbul </div>
                    </div>
                </div>
                    <div style={{display:'flex', justifyContent:'center'}}>
                    <div style={{display:'flex', justifyContent:'center',flexDirection:'column'}}>
                        <a href="https://www.instagram.com/petrahairtransplant">
                        <Image src="/instagram.png" width="44" height="44" objectFit="cover"  alt="Petra Hair Transplant Instagram"/>
                        </a>
                    </div>
                    </div>
            </div>
            </div>
        
        <div style={{margin:'10px 10px'}}>
            Telif Hakkı © 2023 - Tüm hakları saklıdır.
        </div>
        </div>
    );
}