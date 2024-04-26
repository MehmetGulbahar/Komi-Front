import React from "react";

import Orders from "./_components/Orders";
import Todo from "./_components/Todo";
import CookBottom from "../../../layouts/(cook)/Cookbottom";
import { useSelector } from "react-redux";
import AuthCheck from "../../../layouts/(user)/_components/AuthCheck";


export default function index(){
 const user = useSelector((state) => state.user.value);
  const token = localStorage.getItem("token");
    return user?.rule === "ADMIN" || !user ? (
      <>
        <div>
          <div className="flex w-full">
            {token && <AuthCheck />}
            <Orders />
            <div className="divider divider-horizontal"></div>
            <Todo />
          </div>
          <CookBottom />
        </div>
      </>
    ) : (
      <>
                <div className="flex items-center justify-center h-screen font-mono font-bold italic text-2xl ">ACCESS DENIED</div>
      </>
    );

}