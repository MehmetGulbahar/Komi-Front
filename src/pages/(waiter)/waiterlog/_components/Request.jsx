import React, { useEffect, useState } from "react";
import Requestbutton from "./Requestbutton";

export default function Request() {
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("token"); 

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/order/viewAll", {
      method: "POST",
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
      .then((data) => {
        setOrders(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden min-h-screen h-full">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Table No
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Cost
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.order.id} className="border-b border-gray-200">
                    <td className="px-5 py-5 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {order.order.masaId}
                      </p>
                    </td>
                    <td className="px-5 py-5 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {order.order.totalPrice} ₺
                      </p>
                    </td>
                    <td className="px-5 py-5 bg-white text-sm">
                      <span
                        className={`relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight ${
                          order.order.orderStatus === "Waiting"
                            ? "text-yellow-800 bg-yellow-50"
                            : "text-green-800 bg-green-50"
                        }`}
                      >
                        {order.order.orderStatus}
                      </span>
                    </td>
                    <td className="px-5 py-5 bg-white text-sm text-right">
                        <Requestbutton plates={order.plates} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
