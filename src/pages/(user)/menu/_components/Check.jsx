// Check.js
import React, { useState } from "react";
import Ckitems from "./Ckitems";

import Receipt from "./Receipt";

export default function Check({
  checkItems,
  ordersWithNotes,
  setCheckItems,
  setOrdersWithNotes,
  addItemToCheckItems,
}) {
  const deleteOperation = (itemId) => {
    const updatedItems = checkItems.filter((item) => item.id !== itemId);
    setCheckItems(updatedItems);
  };
  const deleteItem = (itemId) => {
    const updatedItems = ordersWithNotes.filter((item) => item.id !== itemId);
    setOrdersWithNotes(updatedItems);
  };
  

  return (
    <div className=" flex flex-wrap w-full md:w-1/4 justify-center gap-5 ">
      <div className="card  shadow-xl w-full hover:none bg-slate-100">
        <div className="flex items-center justify-center space-x-2 m-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
            />
          </svg>

          <h1 className="text-xl font-medium">ORDER</h1>
        </div>

        <ul role="list" className="divide-y divide-slate-200 m-4 ">
        {checkItems.map((item, index) => {
    const orderNote = ordersWithNotes[index]
        ? ordersWithNotes[index].note
        : null;

    return (
        <Ckitems
            key={index}
            id={item.id}
            name={item.name}
            detail={item.detail}
            cost={item.cost * item.quantity}
            deleteOperation={deleteOperation}
            deleteItem={deleteItem}
            note={orderNote}
            imageUrl={item.imageUrl}
            quantity={item.quantity}
            checkItems={checkItems}
            setCheckItems={setCheckItems}
        />
    );
})}

          {checkItems.length > 0 ? (
            <p className="text-right">
              Total: {checkItems.reduce((total, item) => total + item.cost * item.quantity, 0)}{" "}
              ₺
            </p>
          ) : null}
        </ul>
        <button
    className="btn btn-sm btn-primary m-4"
    onClick={() => {
        checkItems.forEach((item, index) => {
            const orderNote = ordersWithNotes[index] ? ordersWithNotes[index].note : null;
            console.log(`Item: ${item.name}, Quantity: ${item.quantity}, Cost: ${item.cost}, Note: ${orderNote}`);
        });
    }}
>
    Make Order
</button>
      </div>
      <Receipt checkItems={checkItems} ordersWithNotes={ordersWithNotes} />
    </div>
  );
}
