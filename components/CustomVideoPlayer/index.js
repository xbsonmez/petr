import React, { useEffect, useRef} from 'react';


 const CustomVideoPlayer = ({source, image,  ...rest}) =>{


    const videoRef = useRef(null);

    useEffect(()=>{
        videoRef.current.style.display = 'block';
        videoRef.current.src = source;
    }, []);

    return (
        <div className="video-player">
          <video 
          ref={videoRef}
          className='videoClass' 
          controls 
          playsInline 
          preload='auto' 
          type="video/mp4"
          />
        </div>
    );
};
export default CustomVideoPlayer;