import React from 'react';
import './Info.css';
import kitchen from "@/assets/img/kitchen.jpg";

const Info = () => {
    return (
    <div className="hero min-h-screen bg-gradient-to-r from-white to-gray-200 flex flex-wrap justify-center ">
           
           <div className='w-full  '>
           <h1 className="text-5xl font-light font-sans text-left text-gray-700 ">
                Innovation on the Plate: Unveiling Our Journey
            </h1>
           </div>
        
            <div className='flex items-center font-mono z-10 w-full lg:w-1/2 md:w-full text-left  '>
                <p className='indent-8  text-left m-3 text-lg'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" <a href='#' className='underline font-bold decoration-sky-500'>by Cicero</a> are also reproduced in their exact original form, accompanied by English versions from the 1914 translation <a href='#' className='underline font-bold decoration-sky-500'>by H. Rackam.</a></p>
            </div>
            <div className=' w-full lg:w-1/2 md:w-full text-center  '>
                <img className='  z-0' src={kitchen} alt="" />
            </div>
    </div>
          
        
      );
    };
export default Info;