import React from "react";

export default function Orders(){
    return (
      <div className="grid h-20 flex-grow  bg-base-300 place-items-center">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Order Id
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Dish
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Quantity
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"></th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                1
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                Haydari
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                2
              </td>
              <td className="whitespace-nowrap px-4 py-2">
                <a
                  href="#"
                  className=" mr-1 inline-block rounded bg-green-600 px-4 py-2 text-xs font-medium text-white hover:bg-green-700"
                >
                  Accept
                </a>
                <a
                  href="#"
                  className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
                >
                  Decline
                </a>
              </td>
              <td className="whitespace-nowrap px-4 py-2">
                <div
                  className="tooltip tooltip-right"
                  data-tip="Tuzsuz"
                >
                  <a className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">
                    View
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                1
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                Haydari
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                2
              </td>
              <td className="whitespace-nowrap px-4 py-2">
                <a
                  href="#"
                  className=" mr-1 inline-block rounded bg-green-600 px-4 py-2 text-xs font-medium text-white hover:bg-green-700"
                >
                  Accept
                </a>
                <a
                  href="#"
                  className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
                >
                  Decline
                </a>
              </td>
              <td className="whitespace-nowrap px-4 py-2">
                <div
                  className="tooltip tooltip-right"
                  data-tip="Tuzsuz, biberli"
                >
                  <a className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">
                    View
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
}