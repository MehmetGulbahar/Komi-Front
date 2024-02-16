import { createBrowserRouter } from "react-router-dom";
import UserLayout from "@/layouts/(user)";
import Home from "@/pages/(user)/home";
import Menu from "@/pages/(user)/menu";
import Reservation from "@/pages/(user)/reservation";
import Place from "@/pages/(user)/place";
import Login from "@/pages/(user)/login";
const router = createBrowserRouter([
    {
        path: "/",
        element: <UserLayout />,
        children: [
            {
                index:true,
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
                element: <Login/>,
            },
        ],
    },
]);

export default router;