
import {Fragment} from 'react';
import Head from 'next/head';
import Router, {useRouter} from 'next/router';
import tr from '@/statics/localization/tr';
import en from '@/statics/localization/en';
import styles from '@/styles/Home.module.css'


export default function BeardAndEyeBrow() {
    const routerTemp = useRouter();
    const {locale} = routerTemp;

    const t = locale === 'en' ? en : tr;
    return (
        <Fragment>
        <Head>
        <title>{'Petra Hair Sakal Ve Kaş Ekimi'}</title>
        <meta property="og:title" content={'Petra Hair Sakal Ve Kaş Ekimi'} key="title" />
      </Head>
    <div className={styles.main} style={{marginTop:'80px'}}>
        <h1>{t.beardTitle}</h1> 
    <div dangerouslySetInnerHTML={{__html:t.beardDesc}} style={{textAlign:'left'}}/>
    </div>
    </Fragment>
    );
};