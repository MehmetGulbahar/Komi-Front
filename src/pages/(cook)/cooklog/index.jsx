import React from "react";

import Orders from "./_components/Orders";
import Todo from "./_components/Todo";
import CookBottom from "../../../layouts/(cook)/Cookbottom";
import { useSelector } from "react-redux";
import AuthCheck from "../../../layouts/(user)/_components/AuthCheck";

export default function index() {
  const user = useSelector((state) => state.user.value);
  const token = localStorage.getItem("token");
  return user?.role === "ADMIN" || !user ? (
    <>
      <div className="flex w-full">
        {token && <AuthCheck />}
        <Orders />
        <div className="divider divider-horizontal"></div>
        <Todo />
      </div>
      <CookBottom />
    </>
  ) : (
    <>
      <div className="flex items-center justify-center h-screen font-mono font-bold italic text-2xl  w-screen bg-gradient-to-l from-gray-200 via-fuchsia-200 to-stone-100 ">
        ACCESS DENIED
      </div>
    </>
  );
}
