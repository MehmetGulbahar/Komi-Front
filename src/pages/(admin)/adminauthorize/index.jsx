import React from "react";
import AdminNavigation from "../../../layouts/(admin)/AdminNavigation";
import AuthorizeList from "./_components/Authorizelist";
import UnAuthorizeList from "./_components/Unauthorizelist";
export default function AdminAuthorize(){
    return(
        <div className="flex">
            <div>
            <AdminNavigation/>
            </div>
            <div className="flex flex-col w-full">
            <div className="w-full mb-4"><AuthorizeList/></div>
            <div className="w-full"><UnAuthorizeList/></div>
            </div>
           
            
        </div>
    )
}