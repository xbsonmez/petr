import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import React from 'react';
import { Carousel } from "antd";
import Image from 'next/image';

const CustomCarusel = () =>{


    return (
        <>
             <Carousel swipeToSlide draggable autoplay autoplaySpeed={3000}>
             <div className='contentCarusel'>
             <h3 className='imageBanner'>
            <div className='bannerText'>
            <img src="/vektor2-removebg.png" style={{width:200, height:120}}/>
            </div>
                <Image src="/before-after/hasan.png" layout="fill" objectFit="cover" className='imageSlider' alt="Petra Hair Transplant"/>
              </h3>
            </div>

            <div className='contentCarusel'>
              <h3 className='imageBanner'>
              <div className='bannerText'>
            <img src="/vektor2-removebg.png" style={{width:200, height:120}}/>
            </div>
            <Image src="/before-after/emin.png" layout="fill" objectFit="cover"  className='imageSlider'  alt="Petra Saç Ekim"/>
              </h3>
            </div>

            <div className='contentCarusel'>
              <h3 className='imageBanner'>
              <div className='bannerText'>
            <img src="/vektor2-removebg.png" style={{width:200, height:120}}/>
            </div>
              <Image src="/before-after/osman/osman-beforeafter1.jpg" layout="fill" objectFit="cover" className='imageSlider'  alt="Saç Ekim"/>
              </h3>
            </div>
            <div className='contentCarusel'>
              <h3 className='imageBanner'>
              <div className='bannerText'>
            <img src="/vektor2-removebg.png" style={{width:200, height:120}}/>
            </div>
              <Image src="/before-after/omer/omer-beforeafter.jpg" layout="fill" objectFit="cover" className='imageSlider'  alt="İstanbul Saç Ekim"/>
              </h3>
            </div>
            <div className='contentCarusel'>
              <h3 className='imageBanner'>
              <div className='bannerText'>
            <img src="/vektor2-removebg.png" style={{width:200, height:120}}/>
            </div>
              <Image src="/before-after/salim.png" layout="fill" objectFit="cover" className='imageSlider'  alt="Turkey Hair Transplant"/>
              </h3>
            </div>
  </Carousel>
        </>
  );
}

export default CustomCarusel;