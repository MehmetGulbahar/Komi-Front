import { useEffect, useState } from "react";
import io from "socket.io-client";

export default function Orders() {
  const token = localStorage.getItem("token");
  const [orders, setOrders] = useState([]);
  const [isAccepted, setIsAccepted] = useState(false);

  const poetsenOne = {
    fontFamily: "Poetsen One, sans-serif",
  };

  const closeModal = () => {
    setIsAccepted(false);
  };

  useEffect(() => {
    const socket = io("http://localhost:8877");

    socket.on("cook_updated", (updatedOrderArray) => {
      console.log("Order updated", updatedOrderArray);
      const updatedOrders = Array.isArray(updatedOrderArray)
        ? updatedOrderArray
        : [updatedOrderArray];

      setOrders((prevOrders) => {
        const updatedOrdersMap = new Map(
          prevOrders.map((order) => [order.order.id, order])
        );
        updatedOrders.forEach((updatedOrder) => {
          if (updatedOrder && updatedOrder.order && updatedOrder.order.id) {
            updatedOrdersMap.set(updatedOrder.order.id, updatedOrder);
          }
        });
        return Array.from(updatedOrdersMap.values());
      });
    });

    return () => socket.disconnect();
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/order/viewAll/cook", {
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
        if (Array.isArray(data)) {
          setOrders(data);
        } else {
          console.error("Fetched data is not an array", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [token]);

  const handleAccept = (orderId) => {
    fetch(
      `http://localhost:8080/api/v1/order/confirm_cook?id=${orderId}&accept=true`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        closeModal();
        setIsAccepted(true);
        deleteOperation(orderId);
      })
      .catch((error) => {
        console.error("Error accepting order:", error);
      });
  };

  const handleReject = (orderId) => {
    fetch(
      `http://localhost:8080/api/v1/order/confirm_cook?id=${orderId}&accept=false`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        closeModal();
        deleteOperation(orderId);

      })
      .catch((error) => {
        console.error("Error rejecting order:", error);
      });
  };

  const deleteOperation = (orderId) => {
    const updatedOrders = orders.filter((order) => order.order.id !== orderId);
    setOrders(updatedOrders);
  };

  return (
    <div
      className="grid h-20 flex-grow bg-base-300 place-items-center text-2xl"
      style={poetsenOne}
    >
      ORDERS
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="">
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
        <tbody className="divide-y divide-gray-200 text-center">
          {orders.map(
            (order) =>
              order &&
              order.order &&
              order.order.id && (
                <tr key={order.order.id}>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {order.order.id}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {order.plates.map((plate) => plate.food).join(", ")}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {order.order.totalPrice}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <a
                      onClick={() => handleAccept(order.order.id)}
                      href="#"
                      className="mr-1 inline-block rounded bg-green-600 px-4 py-2 text-xs font-medium text-white hover:bg-green-700"
                    >
                      Accept
                    </a>
                    <a
                      onClick={() => handleReject(order.order.id)}
                      href="#"
                      className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
                    >
                      Decline
                    </a>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <div
                      className="tooltip tooltip-right"
                      data-tip={order.plates
                        .map((plate) => plate.note)
                        .join(", ")}
                    >
                      <a className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">
                        View
                      </a>
                    </div>
                  </td>
                </tr>
              )
          )}
        </tbody>
      </table>
    </div>
  );
}
