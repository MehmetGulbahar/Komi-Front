import { useState } from "react";
import {
  CheckIcon,
  ChevronDownIcon,
  PlusIcon,
  LinkIcon,
  TrashIcon,
  PencilSquareIcon,
} from "@heroicons/react/20/solid";
import { Menu, Transition } from "@headlessui/react";

export default function Head() {
  const token = localStorage.getItem("token");
  const [isFoodSaved, setIsFoodSaved] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    preparationTime: "",
    course: "",
    price: 0,
  });


  const saveFood = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8080/api/v1/food/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify([formData]),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
         document.getElementById("my_modal_5").showModal();
          setModalIsOpen(true);
      })
      .catch((error) => {
        console.error("Response:", error.response);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;
    if (name === "price") {
      newValue = parseInt(value);
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };
    const closeModal = () => {
      document.getElementById("my_modal_5").close();
      setIsFoodSaved(false);
    };

  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="min-w-0 flex p-5 m-2">
        <h2 className="text-xl font-bold text-gray-900 sm:truncate sm:text-xl sm:tracking-tight">
          Food Management
        </h2>
      </div>
      <div className="mt-5 flex lg:ml-4 lg:mt-0">
        <span className="sm:ml-3">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => document.getElementById("AddForm").show()}
          >
            <PlusIcon
              className="-ml-0.5 mr-1.5 h-5 w-5 text-white"
              aria-hidden="true"
            />
            Add
          </button>
          <dialog id="AddForm" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Add Dish</h3>
              <form onSubmit={saveFood}>
                <div className="sm:col-span-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Dish Name
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Dish Name"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="">
                    <label
                      htmlFor="category"
                      className="block text-xs font-medium leading-6 text-gray-900"
                    >
                      Category
                    </label>
                    <div className="mt-2">
                      <select
                        id="category"
                        name="course"
                        value={formData.course}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      >
                        <option value="APPETIZER">Starter</option>
                        <option value="MAIN">Main Course</option>
                        <option value="DESSERT">Dessert</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-2">
                    Serving Time
                    <select
                      id="preparationTime"
                      name="preparationTime"
                      value={formData.servingTime}
                      onChange={handleInputChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option value="QUICK">Quick 10</option>
                      <option value="FAST">Fast 20</option>
                      <option value="MODERATE">Moderate 30</option>
                      <option value="SLOW">Slow 60</option>
                      <option value="VERY_SLOW">Very Slow 120</option>
                      <option value="EXTREMELY_SLOW">Extremely Slow 300</option>
                    </select>
                  </div>
                  <div className="mt-2">
                    <label
                      htmlFor="price"
                      className="block text-xs font-medium leading-6 text-gray-900"
                    >
                      Price
                    </label>
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      placeholder="Price"
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Description
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="description"
                      name="description"
                      rows={3}
                      value={formData.description}
                      onChange={handleInputChange}
                      className="p-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Description"
                    />
                  </div>
                </div>
                <div className="modal-action">
                  <button
                    type="submit"
                    className="btn btn-primary mr-2"
                    onClick={saveFood}
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="btn"
                    onClick={() => document.getElementById("AddForm").close()}
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </dialog>
        </span>
      </div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            {isFoodSaved ? "Food saved successfully" : "Success!"}
          </h3>
          <p className="py-4">
            {isFoodSaved
              ? "Please check your email."
              : "Food saved successfully"}
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn" onClick={closeModal}>
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
