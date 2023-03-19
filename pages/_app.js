import '@/styles/globals.css';
import CustomLayout from '../components/CustomLayout';

export default function App({ Component, pageProps }) {
  return (    
  <CustomLayout>
    <Component {...pageProps} />
  </CustomLayout>)

}
