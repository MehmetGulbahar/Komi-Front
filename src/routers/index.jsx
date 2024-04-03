import { createBrowserRouter } from "react-router-dom";
import UserLayout from "@/layouts/(user)";
import Home from "@/pages/(user)/home";
import Menu from "@/pages/(user)/menu";
import Reservation from "@/pages/(user)/reservation";
import Place from "@/pages/(user)/place";
import Login from "@/pages/(user)/login";
import Contact from "@/pages/(user)/contact";
import AboutUs from "@/pages/(user)/about-us";
import SignUp from "@/pages/(user)/login/_components/SignUp.jsx";
import Test from "@/pages/(user)/test";
import WaiterLog from "@/pages/(waiter)/waiterlog";
import OrderDetails from "../pages/(waiter)/waiterlog/_components/OrderDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "reservation",
        element: <Reservation />,
      },
      {
        path: "place",
        element: <Place />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "aboutus",
        element: <AboutUs />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
      {
        path: "orderdetails",
        element: <OrderDetails />,
      },
    ],
  },
  {
    path: "/test",
    element: null,
    children: [
      {
        index: true,
        element: <Test />,
      },
    ],
  },
  {
    path: "/waiterlog",
    element: <WaiterLog />,
  },
]);

export default router;
