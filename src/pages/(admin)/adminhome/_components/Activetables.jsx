import React, { useState } from "react";

export default function ActiveTables() {
  const [selectedTable, setSelectedTable] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openDetailsModal = (tableName) => {
    setSelectedTable(tableName);
    setIsModalOpen(true);
  };

  const closeDetailsModal = () => {
    setIsModalOpen(false);
  };

  const tables = [];
  for (let i = 1; i <= 20; i++) {
    const isBusy = Math.random() < 0.5; // Randomly determine if the table is busy
    const cost = isBusy ? Math.floor(Math.random() * 1000) + 500 : 0; // Set cost to 0 if the table is empty
    tables.push({
      id: i,
      name: `Interrior-${i}`,
      status: isBusy ? "Busy" : "Available",
      cost: cost
    });
  }

  return (
    <div className="overflow-x-auto w-full h-96">
      <table className="table table-xs table-pin-rows table-pin-cols">
        <thead>
          <tr>
            <th></th>
            <td>Table Name</td>
            <td>Status</td>
            <td>Sum</td>
            <td>Detail</td>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {tables.map((table) => (
            <tr key={table.id}>
              <th>{table.id}</th>
              <td>{table.name}</td>
              <td>
                <span className={`inline-flex items-center rounded-md ${table.status === "Busy" ? "bg-red-50" : "bg-green-50"} px-2 py-1 text-xs font-medium text-${table.status === "Busy" ? "red" : "green"}-700 ring-1 ring-inset ring-${table.status === "Busy" ? "red" : "green"}-600/10`}>
                  {table.status}
                </span>
              </td>
              <td>{table.cost}</td>
              <td>
                <a
                  className="link-primary link-hover"
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    openDetailsModal(table.name);
                  }}
                >
                  Details
                </a>
              </td>
              <th>{table.id}</th>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <td>Table Name</td>
            <td>Status</td>
            <td>Sum</td>
            <td>Details</td>
            <th></th>
          </tr>
        </tfoot>
      </table>
      {isModalOpen && (
        
        <dialog id="detailsModal"className="modal  modal-bottom sm:modal-middle" open >
          <div className="modal-box">
            <h3 className="font-bold text-lg">Details of {selectedTable}</h3>
            <p className="py-4">Press ESC key or click the button below to close</p>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn" onClick={closeDetailsModal}>
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
        
      )}
    </div>
  );
}
