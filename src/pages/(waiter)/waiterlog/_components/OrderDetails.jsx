import React from "react";

const OrderDetails = ({ plates }) => {
  return (
    <div className="p-8 mt-10">
      <div className="bg-white  mx-auto p-5 rounded-md shadow-lg bg-gray-50">
        {plates.map((plate) => (
          <div key={plate.id}>
            <p>Plate ID: {plate.id}</p>
            <p>Food: {plate.food}</p>
            <p>Note: {plate.note}</p>
            <hr className="my-2" />
          </div>
        ))}
        <div className="text-right"></div>
      </div>
    </div>
  );
};

export default OrderDetails;
