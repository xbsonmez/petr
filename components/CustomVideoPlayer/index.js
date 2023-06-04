import React, { useEffect, useRef} from 'react';


 const CustomVideoPlayer = ({source, image,  ...rest}) =>{


    const videoRef = useRef(null);

    useEffect(()=>{
        videoRef.current.style.display = 'block';
    }, []);

    return (
        <div className="video-player">
          <video 
          ref={videoRef}
          className='videoClass' 
          controls 
          playsInline
          autoplay
          preload='auto' 
          type="video/mp4"
          src={source}
          />
        </div>
    );
};
export default CustomVideoPlayer;