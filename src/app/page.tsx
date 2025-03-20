'use client';

import React from 'react';
import CountdownTimer from '../components/CountdownTimer/CountdownTimer';
import './page.css';
import BgVideo from '@/components/BgVideo/BgVideo';

  export default function Home() {

  return (
    <div>
      <BgVideo/>        
      <CountdownTimer/>    
    </div>  
  );
}