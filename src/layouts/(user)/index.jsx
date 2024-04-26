import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import AuthCheck from "./_components/AuthCheck";
import { useSelector } from "react-redux";

function Index() {
  const user = useSelector((state) => state.user.value);
  const token = localStorage.getItem("token");
  return user || !user ? (
    <>
      <Navbar />
      {token && <AuthCheck />}
      <Outlet />
      <Footer />
    </>
  ) : (
    <>
      <Navbar />
      <AuthCheck />
      bekleyiniz
    </>
  );
}

export default Index;
