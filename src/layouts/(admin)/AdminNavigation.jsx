import React from "react";
import {
  
    HomeIcon,
    UserMinusIcon,
    PencilSquareIcon,
    LockClosedIcon
  } from '@heroicons/react/20/solid'
export default function AdminNavigation (){
    return(
        <div>
             
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
         
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
            <div className="menu p-4 w-80 min-h-full bg-base-200 text-base-content ">
          <div className="flex justify-center">
            <h1 className="text-2xl font-semibold ">komi<b className="font-bold">panel</b> </h1>
          </div>
          <ul>
            <li className="text-xl font-semibold"><a> <HomeIcon className="-ml-0.5 mr-1.5 h-5 w-5 " aria-hidden="true" />Home</a></li>
            <li className="text-xl font-semibold"><a> <PencilSquareIcon className="-ml-0.5 mr-1.5 h-5 w-5 " aria-hidden="true" />Food Management</a></li>
            <li className="text-xl font-semibold"><a> <PencilSquareIcon className="-ml-0.5 mr-1.5 h-5 w-5 " aria-hidden="true" />Table Management</a></li>
            <li className="text-xl font-semibold"><a> <LockClosedIcon className="-ml-0.5 mr-1.5 h-5 w-5 " aria-hidden="true" />Authorization</a></li>
            <li className="text-xl font-semibold"><a> <UserMinusIcon className="-ml-0.5 mr-1.5 h-5 w-5 " aria-hidden="true" />Black List</a></li>



          </ul>
        </div>
          </div>
        </div>
    </div>

    )
}