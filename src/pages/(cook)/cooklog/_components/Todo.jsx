import React, { useEffect, useState } from "react";
import Timer from "./Timer";

export default function Todo() {
  const token = localStorage.getItem("token");
  const [orders, setOrders] = useState([]);


  
   

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/order/viewAll/cook_accept", {
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
    <div className="grid h-full flex-grow bg-base-300 place-items-center">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Order Id
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Dish
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Quantity
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"></th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {orders.map((order) => (
            <tr key={order.order.id}>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                {order.order.id}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {order.plates.map((plate) => plate.food).join(", ")}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                Quantity
              </td>
              <td className="whitespace-nowrap px-4 py-2">
                <Timer
                  orderId={order.order.id}
                  orders={orders}
                  setOrders={setOrders}
                  time={order.plates.map((plate) => plate.preparationTime)}
                />
              </td>
              <td className="whitespace-nowrap px-4 py-2"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
