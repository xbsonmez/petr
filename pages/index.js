import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css';
import {useRouter} from 'next/router';
import tr from '@/statics/localization/tr';
import en from '@/statics/localization/en';
import SendInfoMail from '@/components/SendInfoMail';
import CustomCarusel from '@/components/CustomCarusel';
import CustomVideoPlayer from '@/components/CustomVideoPlayer';
import SubMenus from '@/components/SubMenus';



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
      <div style={{marginTop:'124px'}} id='pageTop'>
      <CustomCarusel />
      </div>

      <main className={styles.main}>
       
        <div style={{width:'100%',padding:'10px'}}>
          <h1 style={{textAlign:'center'}}>{t.transplantMethods}</h1>
          <SubMenus />
        </div>
        <div style={{width:'100%',padding:'10px',margin:'auto', maxWidth:'1120px'}}>
        <h1 style={{textAlign:'center'}}>{t.patientHappinies}</h1>
        <div className={styles.grid}>
          <CustomVideoPlayer source={'/videos/ahmet.mp4'} image={'/before-after/ahmetbeforeafter.jpg'}/>
          <CustomVideoPlayer source={'/videos/burak.mp4'}  image={'/before-after/burak/burakbeforeafter.jpg'}/>
        </div>
        </div>
        <div className={styles.contactWithUs} id='contactWithUSDiv'>
          <div style={{width:'100%', display:'flex', justifyContent:'center', marginBottom:10, fontSize:35, textAlign:'center'}}>
         {t.contactWithUs}
          </div>
          <div  style={{width:'100%', display:'flex', justifyContent:'center'}} > 
          <SendInfoMail t={t}/>
          </div>
        </div>

      </main>

    </>
  )
}
