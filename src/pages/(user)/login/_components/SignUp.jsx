import React, { useState} from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isRegistrationSuccessful, setIsRegistrationSuccessful] =
    useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    const user = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
    };

    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );

      if (response.ok) {
        console.log("User registration successful");
        setIsRegistrationSuccessful(true);
        document.getElementById("my_modal_5").showModal();
      } else {
        console.error(
          "User registration failed",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error during fetch: ", error);
    }
  };

  const handleGenerateTotp = async () => {
    try {
      if (!email) {
        console.error("Email required to create 2FA");
        return;
      }

      const response = await fetch(
        `http://localhost:8080/generateTotp?email=${email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("2FA information generated:", result);
      } else {
        const errorData = await response.json();
        console.error(
          "Error generating 2FA information:",
          response.status,
          errorData
        );
        console.log("Timestamp:", errorData.timestamp);
        console.log("Error:", errorData.error);
        console.log("Path:", errorData.path);
      }
    } catch (error) {
      console.error("Error during fetch: ", error);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const closeModal = () => {
    document.getElementById("my_modal_5").close();
    setIsRegistrationSuccessful(false);
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
                Sign up get the order!
              </h1>
              <p className="mt-4 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                libero nulla eaque error neque ipsa culpa autem, at itaque
                nostrum!
              </p>
            </div>

            <form
              onSubmit={handleRegister}
              action=""
              className="mx-auto mb-0 mt-8 max-w-md space-y-4"
            >
              <div className="columns-2">
                <div>
                  <label htmlFor="firstname" className="sr-only">
                    Name
                  </label>
                  <div className="relative">
                    <input
                      type="firstname"
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                      className="w-full rounded-lg border-black text-black p-4 pe-12 text-sm shadow-sm"
                      placeholder="Enter your name"
                    />
                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4"></span>
                  </div>
                </div>
                <div>
                  <label htmlFor="lastname" className="sr-only">
                    Lastname
                  </label>
                  <div className="relative">
                    <input
                      type="lastname"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                      className="w-full rounded-lg border-black text-black p-4 pe-12 text-sm shadow-sm"
                      placeholder="Enter your lastname"
                    />
                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4"></span>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border-black text-black p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter email"
                  />
                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4"></span>
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
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-lg border-black text-black p-4 pe-12 text-sm shadow-sm"
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
                  You have already an account?
                  <NavLink to="/login" className="underline">
                    Sign in
                  </NavLink>
                </p>
                <div className="py-2 flex space-x-5">
                  <button
                    type="submit"
                    className="inline-block rounded-lg bg-blue-500 px-5 py-1 text-sm font-medium text-white"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            {isRegistrationSuccessful
              ? "User registration successful"
              : "Hello!"}
          </h3>
          <p className="py-4">
            {isRegistrationSuccessful
              ? "Please check your email."
              : "Press ESC key or click the button below to close"}
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn" onClick={closeModal}>
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
