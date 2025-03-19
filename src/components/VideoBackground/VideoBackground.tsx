import './VideoBackground.css';
import React from 'react';

const VideoBackground = () => {
    return (
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
        >
          <source src="../../../public/img/bg-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
    );
  };
  
  export default VideoBackground;
  