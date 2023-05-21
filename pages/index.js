import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {useRouter} from 'next/router';
import tr from '@/statics/localization/tr';
import en from '@/statics/localization/en';
import SendInfoMail from '@/components/SendInfoMail';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const routerTemp = useRouter();
  const {locale} = routerTemp;

  const t = locale === 'en' ? en : tr;

  return (
    <>
      <Head>
        <title>Petra Hair Transplant</title>
        <meta name="description" content="Petra Hair Transplant, Saç Ekiminde Bir Numara. Petra Saç Ekimi " />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

        <div className={styles.description}>
          <img className={styles.homeBanner} src="/before-after/eminbeforeafter2.jpg" />
          <div className={styles.homeBannerText}>
            <h2 style={{textAlign:'center'}}>{t.tranplantTitle}</h2>
            <p>{t.transplantContent}</p>
          </div>
        </div>
        
        <div className={styles.contactWithUs}>
          <div style={{width:'100%', display:'flex', justifyContent:'center', marginBottom:10, fontSize:35, textAlign:'center'}}>
         {t.contactWithUs}
          </div>
          <div  style={{width:'100%', display:'flex', justifyContent:'center'}} > 
          <SendInfoMail t={t}/>
          </div>
        </div>

        <div className={styles.description}>
        <div style={{marginBottom:'10px'}}>
            <h3  style={{textAlign:'center'}}>{t.transplantInfo}</h3>
            <p>{t.transplantInfoContent}</p>
          </div>
          <img className={styles.homeBanner2} src="/vektor1.png" />
        </div>
       
         
        <div className={styles.grid}>

        </div>
       
      </main>
    </>
  )
}
