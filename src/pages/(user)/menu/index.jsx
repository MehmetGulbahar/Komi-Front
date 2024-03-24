import React, { useState, useEffect } from "react";
import Acordeon from "./_components/Acordeon";
import Check from "./_components/Check";
import { v4 as uuidv4 } from "uuid";
import Checkout from "./_components/Checkout";

export default function Index() {
  const [checkItems, setCheckItems] = useState([]);
  const [ordersWithNotes, setOrdersWithNotes] = useState([]);
  const [open, setOpen] = useState(false);


  useEffect(() => {
  }, [checkItems, ordersWithNotes]);

  const generateId = () => {
    return uuidv4();
  };
  const commonId = generateId();
  const addItemToCheckItems = (name, detail, cost, imageUrl, quantity) => {
    const newItem = {
      id: commonId,
      name: name,
      detail: detail,
      cost: cost,
      imageUrl: imageUrl,
      quantity: 1,
    };
    setCheckItems([...checkItems, newItem]);
    console.log(checkItems);
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
  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div className="toast toast-end z-10">
        <div className="indicator">
          <span className="indicator-item badge badge-accent">
            {checkItems.length}
          </span>
          <button className="btn btn-primary btn-circle" onClick={toggleOpen}>
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
                d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex flex-wrap w-full justify-center gap-5 ">
        {/*<Check
          checkItems={checkItems}
          ordersWithNotes={ordersWithNotes}
          setCheckItems={setCheckItems}
          setOrdersWithNotes={setOrdersWithNotes}
          addItemToCheckItems={addItemToCheckItems}
          deleteItem={deleteItem}
        />*/}

        <Acordeon
          addItemToCheckItems={addItemToCheckItems}
          addOrderWithNotes={addOrderWithNotes}
        />
        <Checkout
          open={open}
          setOpen={setOpen}
          checkItems={checkItems}
          ordersWithNotes={ordersWithNotes}
          setCheckItems={setCheckItems}
          setOrdersWithNotes={setOrdersWithNotes}
          addItemToCheckItems={addItemToCheckItems}
          deleteItem={deleteItem}
        />
      </div>
    </div>
  );
}
