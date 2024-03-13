import React from 'react';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import kitchen from './kitchen.jpg'
export default function Example() {
  
  return (
    <div className='bg-cover ' style={{backgroundImage:`url('src/pages/(user)/home/_components/contact.jpg')`}}>
       <div className='w-full  mb-4 '>
           <h1 className="text-5xl font-light font-sans text-center text-black sm:text-white  ">
                Feel free to get in touch
            </h1>
           </div>
    <div className=' container flex flex-wrap w-full justify-center p-5 gap-5  ' >
    <div className=' text-white flex flex-col w-full md:w-1/2 items-center justify-center p-5 backdrop-blur-md '>
    <h1 className="text-3xl font-light font-sans text-left text-white ">
                Meet Us
            </h1>
    <div className='flex items-center justify-center w-full h-full'>
    
  <ul className="list-none p-0 m-0">
    <li className='flex items-center'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
      <span className='ml-2'>+90 501 234 56 78/ +90 509 876 54 32</span>
    </li>
    <li className='flex items-center'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
      </svg>
      <span className='ml-2'>hi@komi.com / info@komi.com</span>
    </li>
    <li className='flex items-center'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
      <span className='ml-2'>Fevzi Çakmak, Sakarya Cd. No:156, 35330 Balçova/İzmir</span>
    </li>
  </ul>
</div>


      
      

    </div>

      <div className='w-full md:w-1/3 p-4 backdrop-blur-md '>
      <form className='gap-5'>
      <label className="input input-bordered flex items-center gap-2 m-2">
       Name
      <input type="text" className="grow" placeholder="Daisy" />
      </label>
      <label className="input input-bordered flex items-center gap-2 m-2">
      Email
      <input type="text" className="grow" placeholder="daisy@site.com" />
      </label>
      
      <textarea className="textarea textarea-bordered  w-full " placeholder="Message..."></textarea>
      <div className="form-control mt-6">
          <button className="btn btn-primary">Send</button>
        </div>
    </form>
    



      </div>
    
      
    </div>
    <div className='bg-blue-300 w-full'>
        <iframe className='w-full h-72' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3127.3222022079776!2d27.042032775723385!3d38.387798571837344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbdc4529058ba1%3A0x8e69cee0b7d6e920!2s%C4%B0zmir%20Ekonomi%20%C3%9Cniversitesi!5e0!3m2!1str!2str!4v1710105043370!5m2!1str!2str" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
    </div>
  )
}
