
import {Fragment} from 'react';
import Head from 'next/head';
import Router, {useRouter} from 'next/router';
import tr from '@/statics/localization/tr';
import en from '@/statics/localization/en';
import styles from '@/styles/Home.module.css'


export default function HairTransplant() {
    const routerTemp = useRouter();
    const {locale} = routerTemp;

    const t = locale === 'en' ? en : tr;
    return (
        <Fragment>
        <Head>
        <title>{'Petra Saç Ekimi Hizmetlerimiz'}</title>
        <meta property="og:title" content={'Saç Ekimi Hizmetlerimiz'} key="title" />
      </Head>
    <div className={styles.main}> 
    <h1>Saç Ekimi Operasyonu Nasıl Gerçekleşir?</h1>
    <p>{t.transplantContent}</p>
    </div>
    </Fragment>
    );
};