import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Layout } from 'antd';
import Header from '../Header';


const CustomLayout = ({children}) =>{
    return (
        <Layout className="layout">
          <Header/>
          {children}
        </Layout>
  );
}

export default CustomLayout;
