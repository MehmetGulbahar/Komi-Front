import React, { useEffect, useState } from "react";
import Timer from "./Timer";
import io from "socket.io-client";

export default function Todo() {
  const token = localStorage.getItem("token");
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const socket = io("http://localhost:8877");

    socket.on("food_updated", (updatedOrderArray) => {
      console.log("Order updated", updatedOrderArray);
      const updatedOrders = Array.isArray(updatedOrderArray)
        ? updatedOrderArray
        : [updatedOrderArray];

      setOrders((prevOrders) => {
        const updatedOrdersMap = new Map(
          prevOrders.map((order) => [order.order.id, order])
        );
        updatedOrders.forEach((updatedOrder) => {
          updatedOrdersMap.set(updatedOrder.order.id, updatedOrder);
        });
        return Array.from(updatedOrdersMap.values());
      });
    });

    return () => socket.disconnect();
  }, []);

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
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [token]);

  return (
    <div className="grid h-full flex-grow bg-base-300 place-items-center">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Order Id
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Dish
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">
              Time
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"></th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-center">
          {orders.map((order) => (
            <React.Fragment key={order.order.id}>
              {order.plates.map((plate) => (
                <tr key={plate.id}>
                  <td className="whitespace-nowrap px-4 py-2 text-black">
                    {order.order.id}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {plate.food}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                  
                    <Timer
                      orderId={order.order.id}
                      orders={orders}
                      setOrders={setOrders}
                      time={plate.preparationTime}
                      orderTime={order.order.localTime}
                    />
                  </td>
                  <td className="whitespace-nowrap px-4 py-2"></td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
