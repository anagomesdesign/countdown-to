'use client';

import React from 'react';
import CountdownTimer from '../components/CountdownTimer/CountdownTimer';
import './page.css';



export default function Home() {

  const video = '/assets/bg-video.mp4';
  
  return (
    <div>
      <video
        autoPlay
        loop
        muted
      >
        <source src={video} type="video/mp4" />
      </video>
      
      <CountdownTimer/>    
    </div>  
  );
}