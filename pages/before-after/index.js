
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
        <title>{t.beforeAfter + ' Petra Hair Transplant'}</title>
        <meta name="description" content="Petra Hair Transplant, Petra Saç Ekimi, İstanbul Saç Ekimi " />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
      </Head>
    <div className={styles.main}> 
    <h2 className='pageTitle'> <b>{t.beforeAfter}</b></h2>
    <div className={styles.description}>
   

    </div>
      <div>{t.aboutContent} </div>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', paddingTop:'20px', gap:'5px'}}> 
      <img className={styles.beforeAfterBanner} src="/before-after/hasan/hasan-beforeafter.jpg" />
      <img className={styles.beforeAfterBanner} src="/before-after/hasan/hasan-beforeafter2.jpg"/>
      <img className={styles.beforeAfterBanner} src="/before-after/hasan/hasan-beforeafter3.jpg" />
      <img className={styles.beforeAfterBanner} src="/before-after/saim/saim-beforeafter.jpg"/>
      <img className={styles.beforeAfterBanner} src="/before-after/saim/saim-beforeafter2.jpg" />
      <img className={styles.beforeAfterBanner} src="/before-after/saim/saim-beforeafter3.jpg"/>
      <img className={styles.beforeAfterBanner} src="/before-after/burak/burakbeforeafter.jpg" />
      <img className={styles.beforeAfterBanner} src="/before-after/burak/burak-beforeafter2.jpg" />
      <img className={styles.beforeAfterBanner} src="/before-after/burak/burak-beforeafter3.jpg" />
    </div>
    </div>

    </Fragment>
    );
};