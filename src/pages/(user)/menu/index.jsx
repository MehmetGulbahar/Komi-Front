import React, { useState } from "react";
import Acordeon from "./_components/Acordeon";
import Check from "./_components/Check";
import { v4 as uuidv4 } from "uuid";

export default function Index() {
  const [checkItems, setCheckItems] = useState([]);

  const deleteItem = (itemId) => {
    const updatedItems = checkItems.filter((item) => item.id !== itemId);
    setCheckItems(updatedItems);
  };

  const addItemToCheckItems = (name, detail, cost) => {
    const newItem = {
      id: uuidv4(),
      name: name,
      detail: detail,

      cost: cost,
    };
    setCheckItems([...checkItems, newItem]);
  };

  return (
    <div>
      <div className="flex flex-wrap w-full justify-center gap-5 m-2">
        <Check
          checkItems={checkItems}
          setCheckItems={setCheckItems}
          addItemToCheckItems={addItemToCheckItems}
          deleteItem={deleteItem}
        />
        <Acordeon addItemToCheckItems={addItemToCheckItems} />
      </div>
    </div>
  );
}
