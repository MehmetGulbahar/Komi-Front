import React from "react";
import AdminNavigation from "../../../layouts/(admin)/AdminNavigation";
import ActiveTables from "./_components/Activetables";
import Statts from "./_components/Statts";
import Reservations from "./_components/Reservations";
import ReservationOptions from "./_components/Reservationoptions";
export default function index() {
  return (
    <div className="flex">
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
        <ReservationOptions/>
        </div>
          
          <Reservations />
        </div>
      </div>
    </div>
  );
}
