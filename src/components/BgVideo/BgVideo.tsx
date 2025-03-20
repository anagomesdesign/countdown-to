import './BgVideo.css';
import React from 'react';

const BgVideo: React.FC = () => {
  
  const video = '/assets/bg-video.mp4';

  return (
    <video
      autoPlay
      loop
      muted
    >
      <source src={video} type="video/mp4" />
    </video>
  );
};

export default BgVideo;
  