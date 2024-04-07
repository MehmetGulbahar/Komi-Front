import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Table from "./_components/Table";
import { useSelector } from "react-redux";
import BottomNav from "../../../layouts/(waiter)/Bottom";

const WaiterTables = () => {
  const [activeTab, setActiveTab] = useState("interior");
  const [selectedTable, setSelectedTable] = useState(null);
  const [isAvailable] = useState();
  const user = useSelector((state) => state.user.value);
  const navigate = useNavigate();
  const handleSomeEvent = () => {
    fetchTableStatus();
  };

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
    if (tableKey) {
      setSelectedTable(tableKey);
      setShowReservationModal(true);
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
            {Object.entries(gardenTableAvailability).map(
              ([tableKey, isAvailable], index) => (
                <Table
                  key={`Garden-${index + 1}`}
                  text={`Garden-${index + 1}`}
                  isAvailable={isAvailable}
                  onClick={() => handleTableClick(`Garden-${index + 1}`)}
                  backgroundImage="/src/assets/img/gardenImage.jpg"
                />
              )
            )}
          </>
        )}
      </div>
      <BottomNav/>
      
    </div>
  );
};

export default WaiterTables;
