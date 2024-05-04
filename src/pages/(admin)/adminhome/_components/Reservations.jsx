import React from "react";

export default function Reservations() {
  return (
    <div className="overflow-x-auto w-full h-36">
      

      <table className="table table-xs table-pin-rows table-pin-cols">
        <thead>
          <tr>
            <th></th>
            <td>User</td>
            <td>#of People</td>
            <td>Time</td>
            <td>Status</td>
            <td>Assign</td>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>userAhmet</td>
            <td>5 </td>
            <td className="content-center">Şu saat</td>
        <td> <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                Waiting
            </span></td>
            <td>
            <select className="select select-bordered select-xs w-48 max-w-xs">
                <option selected>Waiting</option>
                <option>Interrion-1</option>
                <option>Interrion-2</option>
                <option>Interrion-3</option>
                <option>Interrion-4</option>
                <option>Interrion-5</option>
            </select>
            </td>
            <th>1</th>
          </tr>
          <tr>
            <th>2</th>
            <td>userMehmet</td>
            <td>2 </td>
            <td className="content-center">Şu saat</td>
        <td> <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                Waiting
            </span></td>
            <td>
            <select className="select select-bordered select-xs w-48 max-w-xs">
                <option selected>Waiting</option>
                <option>Interrion-1</option>
                <option>Interrion-2</option>
                <option>Interrion-3</option>
                <option>Interrion-4</option>
                <option>Interrion-5</option>
            </select>
            </td>
            <th>2</th>
          </tr>
          <tr>
            <th>3</th>
            <td>userAyşe</td>
            <td>6 </td>
            <td className="content-center">Şu saat</td>
        <td> <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                Waiting
            </span></td>
            <td>
            <select className="select select-bordered select-xs w-48 max-w-xs">
                <option selected>Waiting</option>
                <option>Interrion-1</option>
                <option>Interrion-2</option>
                <option>Interrion-3</option>
                <option>Interrion-4</option>
                <option>Interrion-5</option>
            </select>
            </td>
            <th>3</th>
          </tr>
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
    </div>
  );
}
