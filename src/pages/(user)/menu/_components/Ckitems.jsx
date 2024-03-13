import React, { useState } from "react";
import Quantity from "./Quantity";

export default function Ckitems({
  id,
  name,
  detail,
  cost,
  deleteOperation,
  deleteItem,
  note,
  quantity,
  checkItems,
  setCheckItems // assuming you have a setter function for checkItems
}) {
  
  const [itemQuantity, setItemQuantity] = useState(quantity);

  const handleQuantityChange = (selectedQuantity) => {
    setItemQuantity(selectedQuantity);
    const updatedItems = [...checkItems];
    const itemIndex = updatedItems.findIndex(item => item.id === id);
    updatedItems[itemIndex].quantity = selectedQuantity;
    setCheckItems(updatedItems);
  };

  const handleRemove = () => {
    deleteOperation(id);
    deleteItem(id);
  };

  return (
    <li className="flex justify-between gap-x-6 py-1">
      <div className="flex min-w-0 gap-x-4">
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">
            {name}
          </p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
            {detail}
          </p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
            {note}
          </p>
        </div>
      </div>
      <div className="block shrink-0 sm:flex sm:flex-col sm:items-end">
        <p className="text-sm leading-6 text-gray-900">
          <Quantity quantity={itemQuantity} onChangeQuantity={handleQuantityChange}  />
        </p>
        <p className="mt-1 text-xs leading-5 text-gray-500">
          {cost} ₺ / &nbsp;
          <button onClick={handleRemove} className="text-red-600">
            Remove
          </button>
        </p>
      </div>
    </li>
  );
}
