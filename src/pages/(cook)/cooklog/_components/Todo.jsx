import React from "react";
import Timer from "./Timer";
export default function Todo(){
    return(
        <div className="grid h-full flex-grow  bg-base-300 place-items-center">
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
              <td className="whitespace-nowrap col-span-2 px-4 py-2">
                
              <Timer time={5}/>
             
              </td>
             
            </tr>
           
          </tbody>
        </table>
</div>

       
    )
}