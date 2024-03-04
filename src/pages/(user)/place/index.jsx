import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "./_components/Table";
import { useSelector } from "react-redux";

const Place = () => {
  const [activeTab, setActiveTab] = useState("interior");
  const [selectedTable, setSelectedTable] = useState(null);
  const [showReservationModal, setShowReservationModal] = useState(false);
  const user = useSelector((state) => state.user.value);

 
  const navigate = useNavigate();

  const NavLinkStyles = ({ isActive }) => {
    return {
      borderColor: "#a3a3a3",
      borderTopWidth: isActive ? "1px" : "",
      borderLeftWidth: isActive ? "1px" : "",
      borderRightWidth: isActive ? "1px" : "",
      borderTopLeftRadius: isActive ? "0.25rem" : "",
      borderTopRightRadius: isActive ? "0.25rem" : "",
      color: isActive ? "#4a5568" : "",
      cursor: "pointer",
    };
  };

  const TableAvailability = [
    true,
    true,
    false,
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    false,
    true,
  ];

  const [gardenTableAvailability, setGardenTableAvailability] = useState({
    table1: true,
    table2: true,
    table3: false,
    table4: true,
    table5: true,
    table6: true,
    table7: true,
    table8: true,
    table9: false,
    table10: true,
    table11: true,
    table12: true,
    table13: true,
    table14: true,
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleTableClick = (tableKey) => {
    setSelectedTable(tableKey);
    setShowReservationModal(true);
  };

  const handleReservationConfirm = (confirm) => {
    setShowReservationModal(false);

    if (confirm) {
      if (user?.firstname) {
        console.log(
          `Reservation confirmed for ${user.firstname} at table ${selectedTable}`
        );
        if (activeTab === "interior") {
          const updatedTableAvailability = [...TableAvailability];
          const tableIndex = parseInt(selectedTable.split('-')[1]) - 1;
          updatedTableAvailability[tableIndex] = false;
        } else if (activeTab === "garden") {
          const updatedGardenTableAvailability = { ...gardenTableAvailability };
          updatedGardenTableAvailability[selectedTable] = false;
          setGardenTableAvailability(updatedGardenTableAvailability);
        }
      }  else {
        navigate("/login");
      }
    }
  };
  const NavLink = ({ isActive, onClick, children }) => (
    <a
      onClick={onClick}
      style={NavLinkStyles({ isActive })}
      className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
    >
      {children}
    </a>
  );

  return (
    <div>
      {/* <div className="tabs justify-start flex flex-wrap mr-4" style={{ justifyContent: 'space-between' }}>
        <button onClick={() => handleTabChange('interior')} className={activeTab === 'interior' ? 'bg-indigo-500 text-white' : ''}>
          Interior
        </button>
        <button onClick={() => handleTabChange('garden')} className={activeTab === 'garden' ? 'bg-blue-800 text-white' : ''}>
          Garden
        </button>
      </div> */}
      <div className="container max-w-screen-lg mx-auto px-5">
        <nav className="mx-4 my-4">
          {/* segmentler dinamik olacak burayı dinamik yapmak gerekiyor döngüyle */}
          <a
            onClick={() => handleTabChange("interior")}
            style={NavLinkStyles({ isActive: activeTab === "interior" })}
            className="bg-white inline-block py-2 px-4 text-gray-400 hover:text-gray-800 font-semibold"
          >
            {" "}
            Salon
          </a>
          <a
            onClick={() => handleTabChange("garden")}
            style={NavLinkStyles({ isActive: activeTab === "garden" })}
            className="bg-white inline-block py-2 px-4 text-gray-400 hover:text-gray-800 font-semibold"
          >
            {" "}
            Bahçe{" "}
          </a>
        </nav>
      </div>

      <div className="flex flex-wrap justify-center gap-5 m-2 text-white font-serif font-bold">
        {activeTab === "interior" && (
          <>
            {TableAvailability.map((table, index) => (
              <Table
                key={`Interior-${index + 1}`}
                text={`Interior-${index + 1}`}
                isAvailable={table}
                onClick={() => handleTableClick(`Interior-${index + 1}`)}
                backgroundImage="/src/assets/img/tables.jpg"
              />
            ))}
          </>
        )}
        {activeTab === "garden" && (
          <>
            {TableAvailability.map((table, index) => (
              <Table
                key={`Garden-${index + 1}`}
                text={`Garden-${index + 1}`}
                isAvailable={table}
                onClick={() => handleTableClick(`Garden-${index + 1}`)}
                backgroundImage="/src/assets/img/gardenImage.jpg"
              />
            ))}
          </>
        )}
      </div>

      {showReservationModal && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg
                      className="h-6 w-6 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-headline"
                    >
                      Reservation Confirmation
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Would you like to make a reservation for {selectedTable}
                        ?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={() => handleReservationConfirm(true)}
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Yes
                </button>
                <button
                  onClick={() => handleReservationConfirm(false)}
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Place;
