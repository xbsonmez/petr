import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import React from 'react';
import { Carousel } from "antd";
import Image from 'next/image';

const CustomCarusel = () =>{


    return (
        <>
             <Carousel swipeToSlide draggable autoplay >
             <div className='contentCarusel'>
             <h3 className='imageBanner'>
            <div className='bannerText'>
              <div className='title'>Hastalarımız bizim için önemli. </div>
              <div className='subTitle'>Petra</div>
            </div>
                <Image src="/before-after/hasan/hasan-beforeafter20.jpg" layout="fill" objectFit="cover" className='imageSlider' alt="Petra Hair Transplant"/>
              </h3>
            </div>

            <div className='contentCarusel'>
              <h3 className='imageBanner'>
              <div className='bannerText'>
              <div className='title'>Petra <br/> sizin mutluluğunuz için var.</div>
                </div>
            <Image src="/before-after/ferudun/ferudun-beforeafter13.jpg" layout="fill" objectFit="cover"   alt="Petra Saç Ekim"/>
              </h3>
            </div>
            <div className='contentCarusel'>
              <h3 className='imageBanner'>
              <div className='bannerText'>
              <div className='title'>Fark yaratmak için buradayız.</div>
              </div>
              <Image src="/before-after/osman/osman-beforeafter1.jpg" layout="fill" objectFit="cover" className='imageSlider'  alt="Saç Ekim"/>
              </h3>
            </div>
            <div className='contentCarusel'>
              <h3 className='imageBanner'>
              <div className='bannerText'>
              <div className='title'>Sizi önemsiyoruz.</div>
              <div className='subTitle'>Petra</div>
              </div>
              <Image src="/before-after/omer/omer-beforeafter.jpg" layout="fill" objectFit="cover" className='imageSlider'  alt="İstanbul Saç Ekim"/>
              </h3>
            </div>
            <div className='contentCarusel'>
              <h3 className='imageBanner'>
              <div className='bannerText'>
              <div className='title'>En önemlisi sizin mutluluğunuz.</div>
              <div className='subTitle'>Petra</div>
              </div>
              <Image src="/before-after/hakan/hakan-beforeafter14.jpg" layout="fill" objectFit="cover" className='imageSlider'  alt="Turkey Hair Transplant"/>
              </h3>
            </div>
  </Carousel>
        </>
  );
}

export default CustomCarusel;