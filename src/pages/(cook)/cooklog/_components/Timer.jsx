import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const CountdownTimer = ({ time }) => {
  const initialTime = time * 60 * 1000;
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const timer = timeLeft > 0 && setInterval(() => {
      setTimeLeft(prevTimeLeft => prevTimeLeft - 1000);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const calculateProgress = () => {
    return ((initialTime - timeLeft) / initialTime) * 100;
  };

  const formatTimeLeft = () => {

    const minutes = Math.floor(timeLeft / 60000);
    const seconds = ((timeLeft % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const progress = calculateProgress();
  const segmentSize = 100 / 3; 

  let className;
  if (progress < segmentSize) {
    className = 'progress-success'; 
  } else if (progress < segmentSize * 2) {
    className = 'progress-warning'; 
  } else {
    className = 'progress-error';
  }
  return (
    <div className='w-full flex items-center'>
      <h4 className='font-bold'>{formatTimeLeft()}</h4>
      <progress
        className={`progress ${className} w-36 ml-4`}
        value={progress}
        max="100"
      ></progress>
       <a
                  href="#"
                  className=" ml-4 mr-1 inline-block rounded bg-green-600 px-4 py-2 text-xs font-medium text-white hover:bg-green-700"
                >
                  Ready!
                </a>
    </div>
  );
};
CountdownTimer.propTypes = {
  time: PropTypes.number.isRequired,
};

export default CountdownTimer;
