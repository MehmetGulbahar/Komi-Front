import React from "react";

export default function Receipt({ checkItems, ordersWithNotes }) {
  return (
    <div className="w-full">
      <div className="collapse collapse-plus bg-slate-100">
        <input type="checkbox" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium ">
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
                d="m9 14.25 6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185ZM9.75 9h.008v.008H9.75V9Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008V13.5Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            Receipt
          </div>
        </div>
        <div className="collapse-content">
          <table className="table-auto w-full text-center">
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              {checkItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>1</td>
                  <td>{item.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h1 className="w-full text-right font-medium text-xl">
            Total: {checkItems.reduce((total, item) => total + item.cost, 0)} ₺
          </h1>
        </div>
      </div>
    </div>
  );
}
