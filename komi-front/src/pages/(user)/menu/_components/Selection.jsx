import React from 'react';

export default function Selection() {
  return (
    <div className='flex items-center justify-center bg-gray-600 mb-7'>
      <select className="select w-full md:max-w-xs lg:max-w-sm xl:max-w-md" defaultValue="">
        <option value="" disabled>Select the category you want to view</option>
        <option value="starters">Starters</option>
        <option value="warm-starter">Warm Starter</option>
        <option value="main-course">Main Course</option>
        <option value="beverages">Beverages</option>
        <option value="dessert">Dessert</option>
      </select>
    </div>
  );
}
