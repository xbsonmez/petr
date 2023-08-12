
import {Fragment} from 'react';
import Head from 'next/head';
import Router, {useRouter} from 'next/router';
import tr from '@/statics/localization/tr';
import en from '@/statics/localization/en';
import styles from '@/styles/Home.module.css'


export default function Dressing() {
    const routerTemp = useRouter();
    const {locale} = routerTemp;

    const t = locale === 'en' ? en : tr;
    return (
        <Fragment>
        <Head>
        <title>{'Petra Hair Bir Gün Sonra Pansuman'}</title>
        <meta property="og:title" content={'Petra Hair Bir Gün Sonra Pansuman'} key="title" />
      </Head>
    <div className={styles.main} style={{marginTop:'80px'}}>
        <h1>{t.pansumanTitle}</h1> 
    <div dangerouslySetInnerHTML={{__html:t.pansumanDesc}} style={{textAlign:'left'}}/>
    </div>
    </Fragment>
    );
};