import React from 'react';



export default function CustomVideoPlayer({source, ...rest}) {

    return (
        <div className="video-player">
          <video className='videoClass' controls playsInline preload='none'>
                <source src={source} type="video/mp4" />
            </video>
        </div>
    );
}