import React from 'react';
import './placeCard.css'; 
import { useNavigate } from 'react-router-dom';

const Table = ({ text, isAvailable, onClick, backgroundImage }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (isAvailable) {
      navigate('/waitermenu', { state: { tableName: text } });
    }
  };
    return (
      <div className='flex flex-wrap justify-center gap-5 m-2 bg-slate-300'>
        <button
          className={`custom-button ${isAvailable ? 'available' : 'unavailable'}`} 
          onClick={handleClick}
          disabled={!isAvailable}
          style={{
            backgroundImage: `url(${backgroundImage})`, // Dynamically set background image
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            filter: !isAvailable ? 'blur(0.50px)' : 'none',
          }}
        >
          {isAvailable ? text : 'Not Available'}
        </button>
      </div>
    );
  };
export default Table;