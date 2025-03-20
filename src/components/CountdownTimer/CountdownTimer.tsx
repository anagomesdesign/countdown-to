import { useState, useEffect } from 'react';
import './CountdownTimer.css';

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
    function calculateTimeLeft() {
    // The date we're counting down to
    const countDownDate = new Date("Apr 12 2025 19:00:00 GMT-0300 (BRT)").getTime();
      
    const now = new Date().getTime();
    const distance = countDownDate - now;
      
      if (distance < 0) {
        return { expired: true };
      }
  
      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
        expired: false,
      };
    }
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);
  
    return (
    
    <div className="countdown">
      {timeLeft.expired ? (
        // If the countdown has expired, show this message:
        <p>See you soon!</p>
      ) : (
        <h1>
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </h1>
      )}
    </div>
    );
  };
  
  export default CountdownTimer;  