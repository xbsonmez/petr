
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
   <div>
     <img className={styles.beforeAfterBanner} src="/before-after/eminbeforeafter.jpg" />
      <img className={styles.beforeAfterBanner} src="/before-after/ahmetbeforeafter.jpg"/>
   </div>

    </div>
        {t.aboutContent}
    </div>
    <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center', background:`url('/before-after/bg.jpeg')`, backgroundPosition:'center center'}}> 
      <img className={styles.beforeAfterBanner} src="/before-after/feridunbeforeafter.jpg" />
      <img className={styles.beforeAfterBanner} src="/before-after/beforeafter.jpg"/>
      <img className={styles.beforeAfterBanner} src="/before-after/hasan/hasan-beforeafter.jpg" />
      <img className={styles.beforeAfterBanner} src="/before-after/hasan/hasan-beforeafter2.jpg"/>
      <img className={styles.beforeAfterBanner} src="/before-after/hasan/hasan-beforeafter3.jpg" />
      <img className={styles.beforeAfterBanner} src="/before-after/hasan/hasan-beforeafter5.jpg"/>
      <img className={styles.beforeAfterBanner} src="/before-after/omer/omer-beforeafter.jpg" />
      <img className={styles.beforeAfterBanner} src="/before-after/omer/omer-beforeafter2.jpg"/>
    </div>
    </Fragment>
    );
};