import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Layout } from 'antd';
import Header from '../Header';
import Whatsapp from '../Whatsapp';


const CustomLayout = ({children}) =>{
    return (
        <Layout className="layout">
          <Header/>
          {children}
          <Whatsapp />
        </Layout>
  );
}

export default CustomLayout;
