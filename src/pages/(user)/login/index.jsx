import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "@/store/userSlice";

export default function Index() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoginFailed, setIsLoginFailed] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSignIn = async (e) => {
    e.preventDefault();


    try {
      const response = await fetch("http://localhost:8080/api/v1/auth/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const result = await response.json();
      
        localStorage.setItem("token", result.access_token)
        dispatch(setUser(result));

        console.log("Login successful", result);
        navigate("/");
        
      } else {
        console.error("Login failed", response.status, response.statusText);
        setIsLoginFailed(true);
        const modalElement = document.getElementById("my_modal_5");
        if (modalElement && typeof modalElement.showModal === "function") {
          modalElement.showModal();
        }
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const closeModal = () => {
    document.getElementById("my_modal_5").close();
    setIsLoginFailed(false);
  };

  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: "url(/src/assets/img/loginpageScreen.jpg)" }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content">
        <section className="flex flex-wrap justify-center relative lg:h-screen lg:items-center">
          <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 relative z-10">
            <div className="mx-auto text-center">
              <h1 className="text-2xl font-bold sm:text-3xl">
                Sign in get the order!
              </h1>

              <p className="mt-4 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                libero nulla eaque error neque ipsa culpa autem, at itaque
                nostrum!
              </p>
            </div>

            <form
              onSubmit={handleSignIn}
              action=""
              className="mx-auto mb-0 mt-8 max-w-md space-y-4"
            >
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>

                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="w-full rounded-lg border-gray-200 text-black p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter email"
                  />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    className="w-full rounded-lg border-gray-200 text-black p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter password"
                  />

                  <span
                    className="absolute inset-y-0 end-0 grid place-content-center px-4 cursor-pointer"
                    onClick={toggleShowPassword}
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    )}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-white">
                  No account?
                  <NavLink to="/signUp" className="underline">
                    Sign up
                  </NavLink>
                </p>

                <button
                  type="submit"
                  className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
      {isLoginFailed && (
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Login failed</h3>
            <p className="py-4">Invalid email or password.</p>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn" onClick={closeModal}>
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
}
