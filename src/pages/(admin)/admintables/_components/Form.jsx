import React from "react";
import PreviewList from "./Previewlist";
import {
  PhotoIcon,
  UserCircleIcon,
  PlusCircleIcon,
  EyeIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

export default function Form() {
  const [formCount, setFormCount] = useState(1);

  const handleAddForm = () => {
    event.preventDefault();
    setFormCount(formCount + 1);
  };

  const [segmentData, setSegmentData] = useState([]);
  const isNameExists = (name) => {
    return segmentData.some((segment) => segment && segment.name === name);
  };
  const handleChange = (index, field, value) => {
    const newData = [...segmentData];
    newData[index] = { ...newData[index], [field]: value };
    setSegmentData(newData);
  };
  const handleNameChange = (index, name) => {
    if (isNameExists(name)) {
      alert("Segment with this name already exists!");
      document.getElementById(`segment${index}`).value = "";
      const newData = [...segmentData]; 
      newData.pop(); 
      setSegmentData(newData);
      return;
    } else {
      handleChange(index, "name", name);
    }
  };

  const handleSubmit = () => {
    const allSegmentsValid = segmentData.every(
      (segment) =>
        segment.name !== "" &&
        segment.tableCount !== null &&
        segment.tableCount > 0
    );

    if (allSegmentsValid) {
      // Perform submission logic here
      console.log("All segments are valid");
    } else {
      // Handle invalid segments
      console.log("Some segments are invalid");
    }
  };

  return (
    <div className="m-2">
      <form>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-xl font-semibold leading-7 text-gray-900">
              Add New Table
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              You only decide on segments and how many tables each segment will
              have. (ex. Garden, 23 ={`>`} Garden-1, Garden-2, ... Garden-23 wil
              be table names.)
            </p>
            <div className="grid grid-cols-5 gap-2">
              {[...Array(formCount)].map((_, index) => (
                <React.Fragment key={index}>
                  <div className="col-span-2">
                    <label
                      htmlFor={`segment${index}`}
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      {index + 1}. Segment Name:
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                          type="text"
                          name={`segment${index}`}
                          id={`segment${index}`}
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="ex. Garden"
                          onBlur={(e) =>
                            handleNameChange(index, e.target.value)
                          }
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor={`tablecount${index}`}
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Table Count
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-24">
                        <input
                          type="number"
                          name={`segment${index}`}
                          id={`segment${index}`}
                          className="appearance-none border border-gray-300 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500 w-24"
                          onChange={(e) =>
                            handleChange(index, "tableCount", e.target.value)
                          }
                          required
                          min={0}
                          placeholder={0}
                        />
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}

              <div className="flex col-span-2 items-center justify-start">
                <button
                  className="w-12 h-12 p-0 bg-transparent border-none cursor-pointer"
                  onClick={handleAddForm}
                >
                  <PlusCircleIcon className="w-12 h-12" />
                </button>
                New Segment
              </div>
              <div className="flex col-span-2 items-center justify-start gap-2">
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    document.getElementById("previewModal").showModal();
                  }}
                  className="btn btn-accent overflow-visible"
                >
                  <EyeIcon className="w-6 h-6" />
                  Preview
                </button>

                <button
                  className="btn btn-active btn-primary mr-2"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="overflow-x-auto">
      <h2 className="text-xl font-semibold leading-7 text-gray-900">
              Current Tables
            </h2>
        <table className="table">
          
          <thead>
            <tr>
              <th></th>
              <th>Segment</th>
              <th>Table Count</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          
            <tr className="bg-base-200">
              <th>1</th>
              <td>Garden</td>
              <td>45</td>
              <td><a className="link link-error">Delete</a></td>
            </tr>
          
            <tr className="bg-white-200">
              <th>2</th>
              <td>Interrior</td>
              <td>35</td>
              <td><a className="link link-error">Delete</a></td>
            </tr>
            <tr className="bg-base-200">
              <th>3</th>
              <td>VIP</td>
              <td>12</td>
              <td><a className="link link-error">Delete</a></td>
            </tr>
          </tbody>
        </table>
      </div>
      <dialog id="previewModal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Table Preview</h3>
          <PreviewList segmentData={segmentData} />
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
