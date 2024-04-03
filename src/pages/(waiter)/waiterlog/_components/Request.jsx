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
      {orders.map((order) => (
        <div key={order.order.id} className="mt-8 overflow-x-auto">
          <div className="shadow-md rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Table No
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Cost
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <p className="text-gray-900">{order.order.masaId}</p>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <p className="text-gray-900">{order.order.totalPrice} ₺</p>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <span
                      className={`inline-block bg-${
                        order.order.orderStatus === "Waiting"
                          ? "yellow"
                          : "green"
                      }-100 text-${
                        order.order.orderStatus === "Waiting"
                          ? "yellow"
                          : "green"
                      }-800 px-2 py-1 rounded-full text-xs`}
                    >
                      {order.order.orderStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right">
                    <Requestbutton />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
