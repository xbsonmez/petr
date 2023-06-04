import '@/styles/globals.css';
import '@/styles/patient.css';

import CustomLayout from '../components/CustomLayout';
import Head from 'next/head'

export default function App({ Component, pageProps }) {
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
