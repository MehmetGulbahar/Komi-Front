import React from "react";

const OrderDetails = ({ plates, orderid }) => {
  return (
    <div className="">
      <div className=" bg-transparent  mx-auto p-5 rounded-md  ">
        {plates.map((plate) => (
          <div key={plate.id}>
          <p>Plate ID: {plate.id}</p>
          <ul className="list-disc">
            <li><p>Food: {plate.food}</p></li>
            <li><p>Note: {plate.note}</p></li>
          </ul>
            <hr className="my-1" />
          </div>
        ))} 
      </div>
    </div>
  );
};

export default OrderDetails;
