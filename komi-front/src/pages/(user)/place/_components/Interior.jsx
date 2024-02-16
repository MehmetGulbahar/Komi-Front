import React from 'react';

const Interior = ({ text, isAvailable, onClick }) => {
  return (
    <div className='flex flex-wrap justify-center gap-5 m-2 bg'>
      <button
        className={`border-2 ${isAvailable ? 'bg-indigo-500' : 'bg-gray-300'} w-28 h-28 text-white flex items-center justify-center m-2`}
        onClick={onClick}
        disabled={!isAvailable} // Disable the button if not available
      >
        {isAvailable ? text : 'Not Available'}
      </button>
    </div>
  );
};

export default Interior;
