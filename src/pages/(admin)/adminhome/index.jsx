import React from "react";
import AdminNavigation from "../../../layouts/(admin)/AdminNavigation";
import ActiveTables from "./_components/Activetables";
import Statts from "./_components/Statts";
import Reservations from "./_components/Reservations";
import ReservationOptions from "./_components/Reservationoptions";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import AuthCheck from "../../../layouts/(user)/_components/AuthCheck";
export default function index() {
  const user = useSelector((state) => state.user.value);
const token = localStorage.getItem("token");

  return user?.role === "ADMIN" || !user ? (
    <>
      <div className="flex">
        {token && <AuthCheck/>}
        <div>
          <AdminNavigation />
        </div>
   
        <div className="flex flex-col w-full ">
          <div className="flex">
            <ActiveTables />
          </div>
          <div className="flex  justify-center w-full">
            <Statts />
          </div>
          <div className="p-2 flex flex-col w-full">
            <div className="flex w-full">
              <ReservationOptions />
            </div>

            <Reservations />
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat  h-screen font-bold font-mono italic text-2xl  w-screen bg-gradient-to-l from-gray-200 via-fuchsia-200 to-stone-100">
        <div className="max-w-md mx-auto text-center bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
          <div className="text-9xl font-bold text-indigo-600 mb-4">403</div>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Oops! Forbidden
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Sorry, but you don't have the permission to access this page. It's a
            403 Forbidden error. Please check your credentials or contact the
            administrator if you believe this is an error.
          </p>
          <NavLink
            to={"/"}
            href="#"
            className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors duration-300"
          >
            Go Back Home
          </NavLink>
        </div>
      </div>
    </>
  );
}
