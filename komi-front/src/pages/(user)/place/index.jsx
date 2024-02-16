import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Interior from './_components/Interior';
import Garden from './_components/Garden';

const Place = () => {
  const [activeTab, setActiveTab] = useState('interior');
  const [selectedTable, setSelectedTable] = useState(null);
  const [showReservationModal, setShowReservationModal] = useState(false);

  const navigate = useNavigate();

  const [interiorTableAvailability, setInteriorTableAvailability] = useState({
    table1: true,
    table2: false,
    table3: true,
    table4: true,
    table5: true,
    table6: false,
    table7: true,
    table8: true,
    table9: true,
    table10: true,
    table11: false,
    table12: true,
    table13: true,
    table14: true,
  });

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
      navigate('/login');
    }
  };

  return (
    <div>
      <div className="tabs justify-start flex flex-wrap mr-4" style={{ justifyContent: 'space-between' }}>
        <button onClick={() => handleTabChange('interior')} className={activeTab === 'interior' ? 'bg-indigo-500 text-white' : ''}>
          Interior
        </button>
        <button onClick={() => handleTabChange('garden')} className={activeTab === 'garden' ? 'bg-blue-800 text-white' : ''}>
          Garden
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-5 m-2">
        {activeTab === 'interior' && (
          <>
            <Interior text="Interior-1" isAvailable={interiorTableAvailability.table1} onClick={() => handleTableClick('Interior-1')} />
            <Interior text="Interior-2" isAvailable={interiorTableAvailability.table2} onClick={() => handleTableClick('Interior-2')} />
            <Interior text="Interior-3" isAvailable={interiorTableAvailability.table3} onClick={() => handleTableClick('Interior-3')} />
            <Interior text="Interior-4" isAvailable={interiorTableAvailability.table4} onClick={() => handleTableClick('Interior-3')} />
            <Interior text="Interior-5" isAvailable={interiorTableAvailability.table5} onClick={() => handleTableClick('Interior-5')} />
            <Interior text="Interior-6" isAvailable={interiorTableAvailability.table6} onClick={() => handleTableClick('Interior-6')} />
            <Interior text="Interior-7" isAvailable={interiorTableAvailability.table7} onClick={() => handleTableClick('Interior-7')} />
            <Interior text="Interior-8" isAvailable={interiorTableAvailability.table8} onClick={() => handleTableClick('Interior-8')} />
            <Interior text="Interior-9" isAvailable={interiorTableAvailability.table9} onClick={() => handleTableClick('Interior-9')} />
            <Interior text="Interior-10" isAvailable={interiorTableAvailability.table10} onClick={() => handleTableClick('Interior-10')} />
            <Interior text="Interior-11" isAvailable={interiorTableAvailability.table11} onClick={() => handleTableClick('Interior-11')} />
            <Interior text="Interior-12" isAvailable={interiorTableAvailability.table12} onClick={() => handleTableClick('Interior-12')} />
            <Interior text="Interior-13" isAvailable={interiorTableAvailability.table13} onClick={() => handleTableClick('Interior-13')} />
            <Interior text="Interior-14" isAvailable={interiorTableAvailability.table14} onClick={() => handleTableClick('Interior-14')} />
          </>
        )}
        {activeTab === 'garden' && (
          <>
            <Garden text="Garden-1" isAvailable={gardenTableAvailability.table1} onClick={() => handleTableClick('Garden-1')} />
            <Garden text="Garden-2" isAvailable={gardenTableAvailability.table2} onClick={() => handleTableClick('Garden-2')} />
            <Garden text="Garden-3" isAvailable={gardenTableAvailability.table3} onClick={() => handleTableClick('Garden-3')} />
            <Garden text="Garden-4" isAvailable={gardenTableAvailability.table4} onClick={() => handleTableClick('Garden-4')} />
            <Garden text="Garden-5" isAvailable={gardenTableAvailability.table5} onClick={() => handleTableClick('Garden-5')} />
            <Garden text="Garden-6" isAvailable={gardenTableAvailability.table6} onClick={() => handleTableClick('Garden-6')} />
            <Garden text="Garden-7" isAvailable={gardenTableAvailability.table7} onClick={() => handleTableClick('Garden-7')} />
            <Garden text="Garden-8" isAvailable={gardenTableAvailability.table8} onClick={() => handleTableClick('Garden-8')} />
            <Garden text="Garden-9" isAvailable={gardenTableAvailability.table9} onClick={() => handleTableClick('Garden-9')} />
            <Garden text="Garden-10" isAvailable={gardenTableAvailability.table10} onClick={() => handleTableClick('Garden-10')} />
            <Garden text="Garden-11" isAvailable={gardenTableAvailability.table11} onClick={() => handleTableClick('Garden-11')} />
            <Garden text="Garden-12" isAvailable={gardenTableAvailability.table12} onClick={() => handleTableClick('Garden-12')} />
            <Garden text="Garden-13" isAvailable={gardenTableAvailability.table13} onClick={() => handleTableClick('Garden-13')} />
            <Garden text="Garden-14" isAvailable={gardenTableAvailability.table14} onClick={() => handleTableClick('Garden-14')} />
          </>
        )}
      </div>

   {/* Tailwind Modal */}
      {showReservationModal && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            {/* Modal Panel */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>

            {/* Modal Content */}
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
                        Would you like to make a reservation for {selectedTable}?
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
