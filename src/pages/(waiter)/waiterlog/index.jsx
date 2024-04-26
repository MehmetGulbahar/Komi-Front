import React from "react";
import BottomNav from "../../../layouts/(waiter)/Bottom";
import Request from "./_components/Request";
import { useSelector } from "react-redux";
import AuthCheck from "../../../layouts/(user)/_components/AuthCheck";

export default function index() {
    const user = useSelector((state) => state.user.value);
    const token = localStorage.getItem("token");
  return user?.role === "ADMIN" || !user ? (
    <>
      <Request />
      {token && <AuthCheck />}
      <BottomNav />
    </>
  ) : (
    <>
      <div className="flex items-center justify-center h-screen font-bold font-mono italic text-2xl ">
        ACCESS DENIED
      </div>
    </>
  );
}
