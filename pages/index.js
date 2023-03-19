import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {useRouter} from 'next/router';
import tr from '@/statics/localization/tr';
import en from '@/statics/localization/en';


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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

        <div className={styles.description}>
          <img src="/test1.jpeg" style={{width:'auto', height:400}}/>
          <div style={{marginLeft:40}}>
            <h2>{t.tranplantTitle}</h2>
            <p>{t.transplantContent}</p>
          </div>
        </div>

        <div className={styles.description}>
        <div>
            <h3>{t.transplantInfo}</h3>
            <p>{t.transplantInfoContent}</p>
          </div>
          <img src="/vektor1.png" style={{width:'auto', height:400, marginLeft:40}}/>
        </div>
       
         
        <div className={styles.grid}>

        </div>
       
      </main>
    </>
  )
}
