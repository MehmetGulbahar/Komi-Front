import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

const Timer = ({ time, orderId, orders, setOrders, orderTime }) => {
  if (!orderTime) {
    console.error("orderTime prop is required but was not provided.");
    return null;
  }

  const orderTimeOnly = orderTime.slice(0, 5); // 'HH:MM' formatında
  const initialTime = time * 60 * 1000; // Dakikaları milisaniyeye çevir

  const currentDate = new Date();
  const currentTime = currentDate.getTime();

  const [orderHour, orderMinute] = orderTimeOnly.split(":").map(Number);
  const orderDate = new Date(currentDate);
  orderDate.setHours(orderHour, orderMinute, 0, 0);
  const orderDateTime = orderDate.getTime();

  const elapsedTime = currentTime - orderDateTime;
  const [timeLeft, setTimeLeft] = useState(initialTime - elapsedTime);
  const [isAccepted, setIsAccepted] = useState(false);
  const [started, setStarted] = useState(false); // Yeni state: zamanlayıcı başladı mı?

  const deleteOperation = useCallback(
    (orderId) => {
      const updatedOrders = orders.filter(
        (order) => order.order.id !== orderId
      );
      setOrders(updatedOrders);
    },
    [orders, setOrders]
  );

  const handleAccept = useCallback(
    (orderId) => {
      fetch(`http://localhost:8080/api/v1/order/ready?id=${orderId}`, {
        method: "POST",
        credentials: "include",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          setIsAccepted(true);
          deleteOperation(orderId);
        })
        .catch((error) => {
          console.error("Error accepting order:", error);
        });
    },
    [deleteOperation]
  );

  useEffect(() => {
    if (timeLeft <= 0 && !isAccepted) {
      handleAccept(orderId);
    }
  }, [timeLeft, isAccepted, handleAccept, orderId]);

  useEffect(() => {
    if (started && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1000);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timeLeft, started]);

  const calculateProgress = () => {
    const progressValue = ((initialTime - timeLeft) / initialTime) * 100;
    return isNaN(progressValue) ? 0 : progressValue;
  };

  const formatTimeLeft = () => {
    const minutes = Math.floor(timeLeft / 60000);
    const seconds = ((timeLeft % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const progress = calculateProgress();
  const segmentSize = 100 / 3;
  let className;
  if (progress < segmentSize) {
    className = "progress-success";
  } else if (progress < segmentSize * 2) {
    className = "progress-warning";
  } else {
    className = "progress-error";
  }

  const getLongestTimeForOrderId = (orderId) => {
    const orderPlates = orders.find(
      (order) => order.order.id === orderId
    ).plates;
    const longestTime = Math.max(
      ...orderPlates.map((plate) => plate.preparationTime)
    );
    return longestTime;
  };

  useEffect(() => {
    const longestTime = getLongestTimeForOrderId(orderId) * 60 * 1000;
    if (time === longestTime / (60 * 1000)) {
      setStarted(true);
    } else {
      const timer = setTimeout(() => {
        setStarted(true);
      }, longestTime - initialTime);

      return () => clearTimeout(timer);
    }
  }, [time, orderId, initialTime, orders]);

  return (
    <div className="w-full flex items-center">
      <h4 className="font-bold">{formatTimeLeft()}</h4>
      <progress
        className={`progress ${className} w-36 ml-4`}
        value={progress}
        max="100"
      ></progress>
      <button
        onClick={() => {
          handleAccept(orderId);
        }}
        className="ml-4 mr-1 inline-block rounded bg-green-600 px-4 py-2 text-xs font-medium text-white hover:bg-green-700"
      >
        Ready!
      </button>
    </div>
  );
};

export default Timer;
