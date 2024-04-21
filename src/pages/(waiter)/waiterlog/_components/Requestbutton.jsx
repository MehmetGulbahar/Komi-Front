import React, { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import OrderDetails from "./OrderDetails";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Requestbutton({ plates, orderId }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const token = localStorage.getItem("token");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAccept = () => {
    fetch(
      `http://localhost:8080/api/v1/order/confirm_waiter?id=${orderId}&accept=true`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        closeModal();
      })
      .catch((error) => {
        console.error("Error accepting order:", error);
      });
  };

  const handleReject = () => {
    fetch(
      `http://localhost:8080/api/v1/order/confirm_waiter?id=${orderId}&accept=false`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        closeModal();
      })
      .catch((error) => {
        console.error("Error rejecting order:", error);
      });
  };

  return (
    <Fragment>
      <Menu as="div" className="relative inline-block text-left z-10">
        <div>
          <Menu.Button className="inline-flex w-full justify-center">
            <svg
              className="inline-block h-6 w-6 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
            </svg>
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={openModal}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm w-full text-left"
                    )}
                  >
                    Details
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={handleAccept}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-lime-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Accept
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={handleReject}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-red-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Reject
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center">
          <div className="transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden w-full shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="p-6">
              <OrderDetails plates={plates} />
              <div className="mt-5 sm:mt-6">
                <button
                  onClick={closeModal}
                  type="button"
                  className="inline-block w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}
