import '@/styles/globals.css';
import '@/styles/patient.css';

import CustomLayout from '../components/CustomLayout';
import Head from 'next/head'
import { useEffect } from 'react';
import {useRouter} from 'next/router';

export default function App({ Component, pageProps }) {
  const routerTemp = useRouter();

  useEffect(()=> {

    const element = document.getElementById('__next');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth'});
    }

   return ()=> {
    //remove the event listener
   }
   }, [routerTemp])
  return ( 
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
      </Head>
      <CustomLayout>
        <Component {...pageProps} />
      </CustomLayout>
    </>

  );
}
