import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/store/userSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  const handleLogout = () => {
    fetch("http://localhost:8080/api/v1/auth/logout", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => {
        if (res.ok) {
          console.log("Logout successful");
          dispatch(logout());
          localStorage.removeItem("token");
        } else {
          console.error(`HTTP error, status code ${res.status}`);
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  return (
    <div className="navbar bg-base-200 rounded-3xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <NavLink to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </NavLink>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive ? "underline" : ""
                } text-black hover:text-black focus:outline-none`
              }
            >
              <li className="mr-4">HOME</li>
            </NavLink>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                `${
                  isActive ? "underline" : ""
                } text-black hover:text-black focus:outline-none`
              }
            >
              <li className="mr-4">MENU</li>
            </NavLink>
            <NavLink
              to="/reservation"
              className={({ isActive }) =>
                `${
                  isActive ? "underline" : ""
                } text-black hover:text-black  focus:outline-none`
              }
            >
              {" "}
              <li className="mr-4">RESERVATION</li>
            </NavLink>
            <NavLink
              to="/place"
              className={({ isActive }) =>
                `${
                  isActive ? "underline" : ""
                } text-black hover:text-black focus:outline-none`
              }
            >
              <li className="mr-4">PLACE</li>
            </NavLink>
          </ul>
        </div>
        <NavLink to="/">
          <button className="btn btn-ghost text-xl">
            <img
              src="/src/assets/logo/logo.svg"
              className="text-red-500"
              alt=""
              width={100}
              height={50}
            />
          </button>
        </NavLink>
      </div>

      <div className="flex justify-center navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive ? "underline" : ""
              } text-black hover:text-black focus:outline-none`
            }
          >
            <li className="mr-8">HOME</li>
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `${
                isActive ? "underline" : ""
              } text-black hover:text-black focus:outline-none`
            }
          >
            <li className="mr-8">MENU</li>
          </NavLink>
          <NavLink
            to="/reservation"
            className={({ isActive }) =>
              `${
                isActive ? "underline" : ""
              } text-black hover:text-black focus:outline-none`
            }
          >
            {" "}
            <li className="mr-8">RESERVATION</li>
          </NavLink>
          <NavLink
            to="/place"
            className={({ isActive }) =>
              `${
                isActive ? "underline" : ""
              } text-black hover:text-black focus:outline-none`
            }
          >
            <li className="mr-8">PLACE</li>
          </NavLink>
        </ul>
      </div>

      <div className="navbar-end">
        {user?.firstname ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} className="avatar placeholder">
              <div
                className="bg-slate-700 text-neutral-content rounded-full w-12"
                style={{ cursor: "pointer" }}
              >
                <span>
                  {user?.firstname?.[0].toUpperCase()}
                  {user?.lastname?.[0].toUpperCase()}
                </span>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button className="justify-between">
                  {user?.value?.firstname} {user?.value?.lastname}
                  <NavLink to={"/waiterlog"} className="badge">
                    Profile
                  </NavLink>
                </button>
                {user?.role === "ADMIN" && (
                  <NavLink to={"/adminhome"}>
                    <a>Admin Panel</a>
                  </NavLink>
                )}
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li onClick={handleLogout}>
                <NavLink to="/login">Logout</NavLink>
              </li>
            </ul>
          </div>
        ) : (
          <NavLink
            to="/login"
            className={"btn-dark ext-black hover:text-black focus:outline-none"}
          >
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
}
