
import {Fragment} from 'react';
import Head from 'next/head';
import {useRouter} from 'next/router';
import tr from '@/statics/localization/tr';
import en from '@/statics/localization/en';
import styles from '@/styles/Home.module.css'

export default function BeforeAfter() {
    const routerTemp = useRouter();
    const {locale} = routerTemp;

    const t = locale === 'en' ? en : tr;
    return (
        <Fragment>
        <Head>
        <title>{''}</title>
        <meta property="og:title" content={'Saç Ekimi'} key="title" />
      </Head>
    <div className={styles.main}> 
    <h2> <b>{t.beforeAfter}</b></h2>
    <div className={styles.description}>
   <div>
     <img className={styles.beforeAfterBanner} src="/test1.jpeg" />
      <img className={styles.beforeAfterBanner} src="/test2.jpeg"/>
   </div>

    </div>
        {t.aboutContent}
    </div>
    </Fragment>
    );
};