import React from 'react';

const Garden = ({ text, isAvailable, onClick }) => {
  return (
    <div className='flex flex-wrap justify-center gap-5 m-2'>
      <button
        className={`border-2 ${isAvailable ? 'bg-blue-800' : 'bg-gray-300'} w-28 h-28 bg-blue-800 text-white flex items-center justify-center m-2`}
        onClick={onClick}
        disabled={!isAvailable}
      >
        {isAvailable ? text : 'Not Available'}
      </button>
    </div>
  );
};

export default Garden;
