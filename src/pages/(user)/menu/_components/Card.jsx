import React, { useState } from "react";
import "./Card.css";

import Check from "./Check";

export default function Card({
  imageUrl,
  title,
  description,
  cost,
  addItemToCheckItems,
  addOrderWithNotes,
}) {
  const modalId = `my_modal_${title.replace(/\s/g, "_")}`;

  const [note, setNote] = useState("");
  const handleChange = (event) => {
    setNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addItemToCheckItems(title, description, cost);
    addOrderWithNotes(note);
    document.getElementById(modalId).close();
  };

  return (
    <div className="flex items-center justify-center">
      <div className="card card-compact w-full sm:w-36 md:w-48 lg:w-40 xl:w-48 bg-base-100  shadow-xl  transition duration-400 hover:shadow-none">
        <figure>
          <img
            className="w-full h-24 object-cover"
            src={imageUrl}
            alt={title}
          />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-lg font-semibold">{title}</h2>
          <p className="text-sm">{description}</p>
          <p className="text-xs">
            <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
              {cost} ₺
            </span>
          </p>
          <div className="card-actions flex justify-end mt-4">
            <button
              className="btn btn-primary btn-circle text-2xl"
              onClick={() => document.getElementById(modalId).showModal()}
            >
              <h1>+</h1>
            </button>

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
        </div>
      </div>
    </div>
  );
}
