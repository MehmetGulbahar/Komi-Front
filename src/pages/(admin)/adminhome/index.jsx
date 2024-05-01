import React from "react";
import AdminNavigation from "../../../layouts/(admin)/AdminNavigation";
import ActiveTables from "./_components/Activetables";
import Statts from "./_components/Statts";
export default function index() {
  return (
    <div className="flex">
      <div>
        <AdminNavigation />
      </div>

      <div className="flex flex-col w-full mt-10">
        <div className="flex">
          <ActiveTables />
        </div>
        <div className="flex mt-10 justify-center w-full">
          <Statts />
        </div>
      </div>
    </div>
  );
}
