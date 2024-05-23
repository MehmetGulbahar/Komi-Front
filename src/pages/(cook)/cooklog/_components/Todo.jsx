import React, { useEffect, useState } from "react";
import Timer from "./Timer";
import io from "socket.io-client";

export default function Todo() {
  const token = localStorage.getItem("token");
  const [orders, setOrders] = useState([]);

  const poetsenOne = {
    fontFamily: "Poetsen One, sans-serif",
  };

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

  const filterFoodsByCourse = (orders, course) => {
    return orders.flatMap((order) =>
      order.plates
        .filter((plate) => plate.course === course)
        .map((plate) => ({
          ...plate,
          orderId: order.order.id,
          orderTime: order.order.localTime,
        }))
    );
  };

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

  const renderTable = (course, courseName) => (
    <div key={course}>
      <h2>{courseName}</h2>
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm ">
        <thead>
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
          {filterFoodsByCourse(orders, course).map((plate) => (
            <tr key={plate.id}>
              <td className="whitespace-nowrap px-4 py-2 text-black">
                {plate.orderId}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 ">
                {plate.food}
              </td>
              <td className="whitespace-nowrap px-4 py-2">
                <Timer
                  orderId={plate.orderId}
                  orders={orders}
                  setOrders={setOrders}
                  time={plate.preparationTime}
                  orderTime={plate.orderTime}
                  plateId={plate.id}
                  isMainCourse={course === "MAIN"}
                />
              </td>
              <td className="whitespace-nowrap px-4 py-2"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div
      className="grid h-full flex-grow bg-base-300 text-center text-2xl"
      style={poetsenOne}
    >
      {renderTable("APPETIZER", "STARTER")}
      {renderTable("MAIN", "MAIN COURSE")}
      {renderTable("DESSERT", "DESSERT")}
    </div>
  );
}
