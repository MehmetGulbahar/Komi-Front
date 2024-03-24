import React, { useState } from "react";

import Check from "./Check";

export default function Card({
  title,
  description,
  cost,
  imageUrl,
  addItemToCheckItems,
  addOrderWithNotes,
}) {
  const modalId = `my_modal_${title.replace(/\s/g, "_")}`;

  const [note, setNote] = useState("");
  const [quantity, setQuantity] = useState(1);
  const handleChange = (event) => {
    setNote(event.target.value);
  };
  const handleQuantityChange = (selectedQuantity) => {
    setQuantity(selectedQuantity);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    addItemToCheckItems(title, description, cost, imageUrl);
    addOrderWithNotes(note);
    document.getElementById(modalId).close();
  };


  return (
    <div className="flex items-center justify-center w-full">
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-2 py-2 sm:px-4 sm:py-6 lg:max-w-7xl lg:px-8">
          <div className="mt-0 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
            

            <div className="group relative w-full  bg-white p-2 rounded-md items-center">
              <div className="w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 ">
                <div className="lg:h-48 lg:w-48 bg-red-400 ">
                  <img
                    className="w-full h-full object-cover"
                    src={imageUrl}
                    alt={title}
                  />
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a
                      href="#"
                      onClick={() =>
                        document.getElementById(modalId).showModal()
                      }
                    >
                      <span aria-hidden="true" className="absolute inset-0" />
                      {title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{description}</p>
                </div>
                <p className="text-xs">
                  <span className="inline-flex items-center rounded-md bg-green-50 px-1 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                    {cost}₺
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <dialog id={modalId} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Order Notes</h3>

          <input
            type="text"
            id="orderNote"
            value={note}
            onChange={handleChange}
            name="orderNote"
            className="input input-bordered w-full"
            placeholder="If you do not have an order note, you can leave this field blank."
          />
          <div className="modal-action">
            <form onSubmit={handleSubmit}>
              <button type="submit" className="btn btn-primary mr-2">
                Submit
              </button>
              <button
                className="btn"
                onClick={(event) => {
                  event.preventDefault();
                  document.getElementById(modalId).close();
                }}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
