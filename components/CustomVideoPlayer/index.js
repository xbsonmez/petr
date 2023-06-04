import React from 'react';



export default function CustomVideoPlayer({source, image,  ...rest}) {

    return (
        <div className="video-player">
          <video 
          className='videoClass' 
          controls 
          playsInline 
          preload='auto' 
          src={source} 
          type="video/mp4"
          poster={image}
          />
        </div>
    );
}