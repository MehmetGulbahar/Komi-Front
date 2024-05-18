import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const Request = () => {
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    const socket = io("http://localhost:8877");
    socket.on("cook_updated", (updatedOrder) => {
      console.log("Order updated", updatedOrder);
      setOrders(updatedOrder);
    });

    return () => socket.disconnect();
  }, []);
  return <div className="text-center">{JSON.stringify(orders)}</div>;
};

export default Request;
