import React, { useState, useEffect, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

export default function AuthorizeList() {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
  const [users, setUsers] = useState([]);

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

  const handleAccept = (userId, newRole) => {
    fetch(`http://localhost:8080/api/v1/users/authority`, {
      method: "PATCH",
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
    <div className="w-full p-2">
      <h2 className="text-xl font-semibold leading-7 text-gray-900">
        Give Authorization
      </h2>
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
