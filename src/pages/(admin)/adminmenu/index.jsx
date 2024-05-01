import React from "react";
import AdminNavigation from "../../../layouts/(admin)/AdminNavigation";
import AdminNavResponsive from "../../../layouts/(admin)/AdminNavResponsive";
import Productlist from "./_components/Productlist";
import Head from "./_components/Head";
export default function index() {
  return (
    <div>
      <AdminNavResponsive />
      <div style={{ display: "flex" }}>
        <div>
          <AdminNavigation />
        </div>
        <div className="w-full">
        <Head/>
        <div className="overflow-x-auto ">
        
        <Productlist/>
       
        </div>
        </div>
      </div>
    </div>
  );
}
