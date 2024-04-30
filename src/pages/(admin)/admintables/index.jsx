import React from "react";
import AdminNavigation from "../../../layouts/(admin)/AdminNavigation";
import AdminNavResponsive from "../../../layouts/(admin)/AdminNavResponsive";
import Form from "./_components/Form";
export default function index() {
    return (
      <div>
        <AdminNavResponsive />
        <div className="flex">
          <div className="fixed">
            <AdminNavigation />
          </div>
          <div className="w-full">
        
          <div className="overflow-x-auto ml-80 ">
             <Form />
          </div>
          </div>
        </div>
      </div>
    );
  }
  