
import {Fragment} from 'react';
import Head from 'next/head';
import Router, {useRouter} from 'next/router';
import tr from '@/statics/localization/tr';
import en from '@/statics/localization/en';
import styles from '@/styles/Home.module.css';
import {patientGuide} from '@/statics/constantDef';


export default function PatientGuide() {
    const routerTemp = useRouter();
    const {locale} = routerTemp;

    const t = locale === 'en' ? en : tr;
    return (
        <Fragment>
        <Head>
        <title>{'Saç Ekimi Öncesi Ve Sonrası Hasta Rehberi Petra Hair'}</title>
        <meta property="og:title" content={'Saç Ekimi Öncesi Ve Sonrası Hasta Rehberi'} key="title" />
      </Head>
    <div className={styles.main}> 
    <h1>{patientGuide.title}</h1>
    <div dangerouslySetInnerHTML={{__html: patientGuide.desc}} />
    </div>
    </Fragment>
    );
};