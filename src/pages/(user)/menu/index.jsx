import React, { useState } from "react";
import Acordeon from "./_components/Acordeon";
import Check from "./_components/Check";
import { v4 as uuidv4 } from "uuid";

export default function Index() {
  const [checkItems, setCheckItems] = useState([]);
  const [ordersWithNotes, setOrdersWithNotes] = useState([]);

  const generateId = () => {
    return uuidv4();
  };
  const commonId = generateId();
  const addItemToCheckItems = (name, detail, cost, quantity) => {
    const newItem = {
      id: commonId,
      name: name,
      detail: detail,
      cost: cost,
      quantity: 1
    };
    setCheckItems([...checkItems, newItem]);
  };

  const addOrderWithNotes = (note) => {
    const newOrderWithNote = {
      id: commonId,
      note: note,
    };
    setOrdersWithNotes([...ordersWithNotes, newOrderWithNote]);
    console.log(newOrderWithNote);
  };

  const deleteItem = (itemId) => {
    const updatedItems = checkItems.filter((item) => item.id !== itemId);
    setCheckItems(updatedItems);
  };

  return (
    <div>
      <div className="flex flex-wrap w-full justify-center gap-5 m-2">
        <Check
          checkItems={checkItems}
          ordersWithNotes={ordersWithNotes}
          setCheckItems={setCheckItems}
          setOrdersWithNotes={setOrdersWithNotes}
          addItemToCheckItems={addItemToCheckItems}
          deleteItem={deleteItem}
        />
        <Acordeon
          addItemToCheckItems={addItemToCheckItems}
          addOrderWithNotes={addOrderWithNotes}
        />
      </div>
    </div>
  );
}
