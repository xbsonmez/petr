
import {Fragment} from 'react';
import Head from 'next/head';
import Router, {useRouter} from 'next/router';
import tr from '@/statics/localization/tr';
import en from '@/statics/localization/en';
import styles from '@/styles/Home.module.css'


export default function About() {
    const routerTemp = useRouter();
    const {locale} = routerTemp;

    const t = locale === 'en' ? en : tr;
    return (
        <Fragment>
        <Head>
        <title>{t.about + 'Petra'}</title>
        <meta property="og:title" content={'Saç Ekimi'} key="title" />
      </Head>
    <div className={styles.main}> 
                <h2><b>{t.about}</b></h2>
                {t.aboutContent}
                <img src="/vektor2.png" style={{width:'500px', padding:20}}/>
    </div>
    </Fragment>
    );
};