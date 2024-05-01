import React from "react";
import { NavLink } from "react-router-dom";
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
          <div className="menu p-0  pt-4 w-80 min-h-full bg-base-200 text-base-content">
            <div className="flex justify-center">
              <h1 className="text-2xl font-semibold">komi<b className="font-bold">panel</b></h1>
            </div>
            <ul>
              <li className="text-xl font-semibold rounded-none">
                <NavLink to="/adminhome" activeClassName="font-bold">
                  <HomeIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />Home
                </NavLink>
              </li>
              <li className="text-xl font-semibold ">
                <NavLink to="/adminmenu" activeClassName="font-bold rounded-none">
                  <PencilSquareIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />Food Management
                </NavLink>
              </li>
              <li className="text-xl font-semibold">
                <NavLink to="/admintables" activeClassName="font-bold">
                  <PencilSquareIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />Table Management
                </NavLink>
              </li>
              <li className="text-xl font-semibold">
                <NavLink to="/authorization" activeClassName="font-bold">
                  <LockClosedIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />Authorization
                </NavLink>
              </li>
              <li className="text-xl font-semibold">
                <NavLink to="/black-list" activeClassName="font-bold">
                  <UserMinusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />Black List
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    )
}