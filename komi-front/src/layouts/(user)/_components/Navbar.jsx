import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
  <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <NavLink to="/">
        <svg to="/" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </NavLink>
          </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <NavLink to="/" className={({isActive})=> `${isActive? "underline":"" } text-black hover:text-black focus:outline-none`}><li className="mr-4">HOME</li></NavLink>
      <NavLink to="/menu" className={({isActive})=> `${isActive? "underline":"" } text-black hover:text-black focus:outline-none`}><li className="mr-4">MENU</li></NavLink>
      <NavLink to="/reservation" className={({isActive})=> `${isActive? "underline":"" } text-black hover:text-black focus:outline-none`}> <li className="mr-4">REZERVATION</li></NavLink>
       <NavLink to="/place" className={({isActive})=> `${isActive? "underline":"" } text-black hover:text-black focus:outline-none`}><li className="mr-4">PLACE</li></NavLink>
      </ul>
    </div>
        <a className="btn btn-ghost text-xl"><img src="/src/assets/logo/logo.svg" className="text-red-500" alt="" width={100} height={50} /></a>
  </div>
  <div className="flex justify-center navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">

   <NavLink to="/" className={({isActive})=> `${isActive? "underline":"" } text-black hover:text-black focus:outline-none`}><li className="mr-4">HOME</li></NavLink>
   <NavLink to="/menu" className={({isActive})=> `${isActive? "underline":"" } text-black hover:text-black focus:outline-none`}><li className="mr-4">MENU</li></NavLink>
   <NavLink to="/reservation" className={({isActive})=> `${isActive? "underline":"" } text-black hover:text-black focus:outline-none`}> <li className="mr-4">REZERVATION</li></NavLink>
   <NavLink to="/place" className={({isActive})=> `${isActive? "underline":"" } text-black hover:text-black focus:outline-none`}><li className="mr-4">PLACE</li></NavLink>
 

    </ul>
  </div>
      <div className="navbar-end">
        <NavLink to="/login" className={"btn-dark ext-black hover:text-black focus:outline-none"}>Login</NavLink>
  </div>
</div>
  )
}

