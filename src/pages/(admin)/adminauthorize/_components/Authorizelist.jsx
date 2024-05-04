import React, { useState, useEffect } from "react";

export default function AuthorizeList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const newData = [];
      for (let i = 1; i <= 50; i++) {
        newData.push({
          id: i,
          number: 1234 + i,
          email: `sample${i}@mail.com`,
          roles: ['Waiter', 'Chef']
        });
      }
      setData(newData);
    };

    fetchData();
  }, []); 

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
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <th>{item.id}</th>
                <td>{item.number}</td>
                <td>{item.email}</td>
                <td>
                  {item.roles.map((role, index) => (
                    <button
                      key={index}
                      className="btn btn-neutral btn-xs mr-2"
                    >
                      {role}
                    </button>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>User Id</th>
              <th>E-mail</th>
              <th>Authorize As</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
