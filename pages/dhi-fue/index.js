
import {Fragment} from 'react';
import Head from 'next/head';
import Router, {useRouter} from 'next/router';
import tr from '@/statics/localization/tr';
import en from '@/statics/localization/en';
import styles from '@/styles/Home.module.css'


export default function DhiFue() {
    const routerTemp = useRouter();
    const {locale} = routerTemp;

    const t = locale === 'en' ? en : tr;
    return (
        <Fragment>
        <Head>
        <title>{'Petra Hair DHI-FUE '}</title>
        <meta property="og:title" content={'Petra Hair DHI-FUE'} key="title" />
      </Head>
    <div className={styles.main} style={{marginTop:'80px'}}>
        <h1>{t.dhiFueTitle}</h1> 
    <div dangerouslySetInnerHTML={{__html:t.DhiFue}} style={{textAlign:'left'}}/>
    </div>
    </Fragment>
    );
};