import React from "react";

export default function UnAuthorizeList(){
    return(
        <div className=" w-full p-2 ">
         <h2 className="text-xl font-semibold leading-7 text-gray-900">
         Unauthorize Users
        </h2>
      <div className="overflow-x-auto w-full h-48">
        <table className="table table-xs w-full ">
          <thead>
            <tr>
              <th></th>
              <th>User Id</th>
              <th>E-mail</th>
              <th>Unauthorize</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>3457</td>
              <td>example1@mail.com</td>
              <td><button class="btn btn-neutral btn-xs">Unauthorize</button></td>
            </tr>
            <tr>
              <th>2</th>
              <td>3458</td>
              <td>example2@mail.com</td>
              <td><button class="btn btn-neutral btn-xs">Unauthorize</button></td>
            </tr>
            <tr>
              <th>3</th>
              <td>3459</td>
              <td>example3@mail.com</td>
              <td><button class="btn btn-neutral btn-xs">Unauthorize</button></td>
            </tr>
            <tr>
              <th>4</th>
              <td>3460</td>
              <td>example4@mail.com</td>
              <td><button class="btn btn-neutral btn-xs">Unauthorize</button></td>
            </tr>
          </tbody>
          <tfoot>
          <tr>
              <th></th>
              <th>User Id</th>
              <th>E-mail</th>
              <th>Unauthorize</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  
    )
}