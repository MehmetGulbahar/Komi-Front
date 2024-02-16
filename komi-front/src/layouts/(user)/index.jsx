import {Outlet} from "react-router-dom"
import Navbar from "./_components/Navbar"
import Footer from "./_components/Footer"


function index() {
  return (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
  )
}

export default index