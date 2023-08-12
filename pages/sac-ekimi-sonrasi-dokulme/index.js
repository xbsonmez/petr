
import {Fragment} from 'react';
import Head from 'next/head';
import Router, {useRouter} from 'next/router';
import tr from '@/statics/localization/tr';
import en from '@/statics/localization/en';
import styles from '@/styles/Home.module.css'


export default function SokDokulme() {
    const routerTemp = useRouter();
    const {locale} = routerTemp;

    const t = locale === 'en' ? en : tr;
    return (
        <Fragment>
        <Head>
        <title>{'Petra Hair Saç Ekimi Sonrası dökülme olur mu?'}</title>
        <meta property="og:title" content={'Petra Hair Saç Ekimi Sonrası dökülme olur mu?'} key="title" />
      </Head>
    <div className={styles.main} style={{marginTop:'80px'}}>
        <h1>{t.afterHairTransplantSheddingTitle}</h1> 
    <div dangerouslySetInnerHTML={{__html:t.afterHairTransplantSheddingDesc}} style={{textAlign:'left'}}/>
    </div>
    </Fragment>
    );
};