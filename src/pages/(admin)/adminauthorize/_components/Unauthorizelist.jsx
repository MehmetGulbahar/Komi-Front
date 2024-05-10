import React, { useEffect, useState } from "react";

export default function UnAuthorizeList() {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("token");


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
      console.log(users);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}, []);


  return (
    <div className=" w-full p-2 ">
      <h2 className="text-xl font-semibold leading-7 text-gray-900">
        Unauthorize Users
      </h2>
      <div className="overflow-x-auto w-full h-48">
        <table className="table table-xs w-full ">
          <thead>
            <tr>
              <th></th>
              <th>User Id</th>
              <th>E-mail</th>
              <th>Unauthorize</th>
            </tr>
          </thead>
          <tbody>
            {users.map(
              (user) =>
                user.role !== "USER" && (
                  <tr key={user.id}>
                    <th>{user.id}</th>
                    <th>{user.id}</th>
                    <td>{user.email}</td>
                    <td>
                      <button className="btn btn-neutral btn-xs mr-2">
                        {user.role}
                      </button>
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
              <th>Unauthorize</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}