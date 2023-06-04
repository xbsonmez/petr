import React from 'react';



export default function CustomVideoPlayer({source, ...rest}) {

    return (
        <div className="video-player">
          <video width="100%" height="100%" controls playsInline>
                <source src={source} type="video/mp4" />
            </video>
        </div>
    );
}