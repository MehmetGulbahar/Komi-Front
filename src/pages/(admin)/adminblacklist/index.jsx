import React from "react";
import AdminNavigation from "../../../layouts/(admin)/AdminNavigation";
import BlackList from "./_components/Blacklist";
import WhiteList from "./_components/Whitelist";
export default function AdminBlackList(){
    return(
        <div className="flex">
        <div>
        <AdminNavigation/>
        </div>
        <div className="flex flex-col w-full">
        <div className="w-full mb-4"><BlackList/></div>
        <div className="w-full"><WhiteList/></div>
        </div>
       
    </div>
    )
}