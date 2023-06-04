import React from 'react';
import CustomVideoPlayer from '../CustomVideoPlayer';
import CustomSlider from '../CusomSlider';
import styles from '@/styles/Home.module.css'

const Patience = () =>{

    const renderVideoSlider = [
        <div key={1}><CustomVideoPlayer source={'/videos/ahmet.mp4'}/> </div>,
        <div key={2}><CustomVideoPlayer source={'/videos/burak.mp4'}/> </div>,
        <div key={3}><CustomVideoPlayer source={'/videos/emin.mp4'}/> </div>,
        <div key={4}><CustomVideoPlayer source={'/videos/fatih.mp4'}/> </div>,
        <div key={5}><CustomVideoPlayer source={'/videos/feridun.mp4'}/> </div>,
        <div key={6}><CustomVideoPlayer source={'/videos/hakan.mp4'}/> </div>,
        <div key={7}><CustomVideoPlayer source={'/videos/hasan.mp4'}/> </div>,
        <div key={7}><CustomVideoPlayer source={'/videos/mustafa.mp4'}/> </div>,
        <div key={7}><CustomVideoPlayer source={'/videos/osman.mp4'}/> </div>,
        <div key={7}><CustomVideoPlayer source={'/videos/salim.mp4'}/> </div>,
  
  ];

    return (
         
      <div className={styles.slider}>
        <div className={styles.sliderContainer}> 
             <CustomSlider >
                {renderVideoSlider}
             </CustomSlider>
            </div>
         </div>
  );
}

export default Patience;