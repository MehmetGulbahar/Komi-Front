import React, { useState, useEffect, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/20/solid";

export default function AuthorizeList() {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
  const [users, setUsers] = useState([]);
  const [isUserSaved, setIsUserSaved] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password:"",
    role: "",
  });

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/users/viewAll", {
      method: "GET",
      credentials: "include",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((users) => {
        setUsers(users);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const saveUser = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8080/api/v1/users/addUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify([formData]),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        document.getElementById("my_modal_5").showModal();
        setModalIsOpen(true);
      })
      .catch((error) => {
        console.error("Response:", error.response);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      const newData = [];
      for (let i = 1; i <= 50; i++) {
        newData.push({
          id: i,
          number: 1234 + i,
          email: `sample${i}@mail.com`,
          roles: ["Waiter", "Chef"],
        });
      }
      setData(newData);
    };

    fetchData();
  }, []);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
      const closeModal = () => {
        document.getElementById("AddUser").close();
        setIsUserSaved(false);
      };

  const handleAccept = (userId, newRole) => {
    fetch(`http://localhost:8080/api/v1/users/authority`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        id: userId,
        role: newRole,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
      })
      .then((user) => {
        console.log("Basarili");
      })
      .catch((error) => {
        console.error("Error changing user role:", error);
      });
  };

  return (
    <div className="w-full p-0 relative">
      <div className="min-w-0 flex p-5 m-2">
        <h2 className="text-xl font-semibold leading-7 text-gray-900">
          Give Authorization
        </h2>
      </div>
      <div className="absolute top-0 right-0 mt-5 mr-5">
        <span className="sm:ml-3">
          <button
            type="button"
            className="inline-flex items-center rounded-md  bg-gray-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => document.getElementById("AddUser").show()}
          >
            <PlusIcon
              className="-ml-0.5 mr-1.5 h-5 w-5 text-white"
              aria-hidden="true"
            />
            Add
          </button>
          <dialog id="AddUser" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Add User</h3>
              <form>
                <div className="sm:col-span-4 mt-5">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    First Name
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            firstName: e.target.value,
                          })
                        }
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Type Firstname"
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-4 mt-5">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Last Name
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Type Lastname"
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-4 mt-5">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Type Email"
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-4 mt-5">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Type Password"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 grid place-content-center px-4 cursor-pointer"
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
                      </button>
                    </div>
                  </div>
                </div>

                <div className="w-full">
                  <div className="mt-2">
                    <label
                      htmlFor="category"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Role
                    </label>
                    <div className="mt-2">
                      <select
                        id="category"
                        name="course"
                        value={formData.role}
                        onChange={(e) =>
                          setFormData({ ...formData, role: e.target.value })
                        }
                        className="block w-full block text-sm font-medium leading-6 text-gray-900 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      >
                        <option value="WAITER">WAITER</option>
                        <option value="COOK">COOK</option>
                        <option value="ADMIN">ADMIN</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="modal-action">
                  <button
                    type="submit"
                    onClick={saveUser}
                    className="btn btn-primary mr-2"
                  >
                    Submit
                  </button>
                  <button type="button" className="btn" onClick={closeModal}>
                    Close
                  </button>
                </div>
              </form>
            </div>
          </dialog>
        </span>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">
              {isUserSaved ? "User saved successfully" : "Success!"}
            </h3>
            <p className="py-4">
              {isUserSaved
                ? "Please check your email."
                : "User saved successfully"}
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
      <div className="overflow-x-auto w-full h-96">
        <table className="table table-xs w-full">
          <thead>
            <tr>
              <th></th>
              <th>User Id</th>
              <th>E-mail</th>
              <th>Authorize As</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(
              (user) =>
                user.role === "USER" && (
                  <tr key={user.id}>
                    <th>{user.id}</th>
                    <th>{user.id}</th>
                    <td>{user.email}</td>
                    <td>
                      <button className="btn btn-neutral btn-xs mr-2">
                        {user.role}
                      </button>
                    </td>
                    <td>
                      <Menu
                        as="div"
                        className="relative inline-block text-left"
                      >
                        <div>
                          <Menu.Button className="flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-1 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200">
                            Authorization
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1 flex items-center">
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    onClick={() =>
                                      handleAccept(user.id, "WAITER")
                                    }
                                    className={`${
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-900"
                                    } block px-4 py-2 text-sm font-semibold`}
                                  >
                                    WAITER
                                  </button>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    onClick={() =>
                                      handleAccept(user.id, "COOK")
                                    }
                                    className={`${
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-900"
                                    } block px-4 py-2 text-sm font-semibold`}
                                  >
                                    COOK
                                  </button>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    onClick={() =>
                                      handleAccept(user.id, "ADMIN")
                                    }
                                    className={`${
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-900"
                                    } block px-4 py-2 text-sm font-semibold`}
                                  >
                                    ADMIN
                                  </button>
                                )}
                              </Menu.Item>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </td>
                  </tr>
                )
            )}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>User Id</th>
              <th>E-mail</th>
              <th>Authorize As</th>
              <th>Actions</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
