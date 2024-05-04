import React from "react";
import { ChevronLeftIcon, ChevronRightIcon, TrashIcon, PencilSquareIcon } from '@heroicons/react/20/solid';

const TableRow = ({ dish, id }) => (
  
  <tr key={dish.id}>
    <th>
        
      <label htmlFor={`checkbox-${id}`}>
        <input type="checkbox" id={`checkbox-${id}`} className="checkbox" />
      </label>
    </th>
    <td>
      <div className="flex items-center gap-3">
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src="https://www.giverecipe.com/wp-content/uploads/2014/04/Haydari-meze.jpg" alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
        <div>
          <div className="font-bold">{dish.name}</div>
        </div>
      </div>
    </td>
    <td className="w-64 whitespace-nowrap overflow-hidden relative" >
    
      {dish.ingredients.slice(0,60)}...
      
    </td>
    <td>{dish.category}</td>
    <td> <span className="hidden sm:block">
          <button
            type="button"
            className="mr-2 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <TrashIcon
              className="-ml-0.5 mr-0.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </button>
        
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          onClick={()=>document.getElementById('EditForm').showModal()}
          >
            <PencilSquareIcon
              className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            Edit
          </button>
          <dialog
            id="EditForm"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">Edit Dish</h3>
             <form action="">
             <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Dish Name
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Dish Name"
                  />
                </div>
              </div></div>
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
                    name="category"
          
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option >Starter</option>
                    <option >Main Course</option>
                    <option >Dessert</option>
                  </select>
                </div>
              </div>
               <div className="w-36">
               <label
                  for="first-name"
                  className="block  font-medium leading-6 text-gray-900 text-sm"
                >
                  Serving Time 
                </label>
                <div class="mt-2">
                <input type="number" id="number-input" aria-describedby="helper-text-explanation" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-1" placeholder="ex.40" required />
                </div>
               </div>
              </div>
             <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
               Ingredients
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="p-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                  placeholder="ingredient1, ingredient2, ingredient3, ..."
                />
              </div>
            </div>
             </form>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn btn-primary mr-2">Submit</button>
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </span></td>
  </tr>
);

export default function Productlist() {
  const data = [
    { id: 1, name: 'Haydari', ingredients: 'Yogurt, Garlic, Mint, Dill, Parsley, Feta Cheese, Olive Oil, Lemon Juice, Salt, Black Pepper', category: 'Starter' },
    { id: 2, name: 'Haydari', ingredients: 'Yogurt, Garlic, Mint, Dill, Parsley, Feta Cheese, Olive Oil, Lemon Juice, Salt, Black Pepper', category: 'Starter' },
    { id: 3, name: 'Haydari', ingredients: 'Yogurt, Garlic, Mint, Dill, Parsley, Feta Cheese, Olive Oil, Lemon Juice, Salt, Black Pepper', category: 'Starter' },
    { id: 4, name: 'Haydari', ingredients: 'Yogurt, Garlic, Mint, Dill, Parsley, Feta Cheese, Olive Oil, Lemon Juice, Salt, Black Pepper', category: 'Starter' },
    { id: 5, name: 'Haydari', ingredients: 'Yogurt, Garlic, Mint, Dill, Parsley, Feta Cheese, Olive Oil, Lemon Juice, Salt, Black Pepper', category: 'Starter' },
    { id: 6, name: 'Haydari', ingredients: 'Yogurt, Garlic, Mint, Dill, Parsley, Feta Cheese, Olive Oil, Lemon Juice, Salt, Black Pepper', category: 'Starter' },
    { id: 7, name: 'Haydari', ingredients: 'Yogurt, Garlic, Mint, Dill, Parsley, Feta Cheese, Olive Oil, Lemon Juice, Salt, Black Pepper', category: 'Starter' },
  ];

  return (
    <div>
      <table className="table w-full">
        <thead>
          <tr>
            <th>
                Disable
            </th>
            <th>Dish</th>
            <th>Ingredients</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((dish, index) => (
            <TableRow key={index} dish={dish} id={index + 1} />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Disable</th>
            <th>Dish</th>
            <th>Ingredients</th>
            <th>Category</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
  
  <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to <span className="font-medium">7</span> of{' '}
            <span className="font-medium">97</span> results
          </p>
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
            <a
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              2
            </a>
            <a
              href="#"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              3
            </a>
            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
              ...
            </span>
            <a
              href="#"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              8
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              9
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              10
            </a>
            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>

    </div>
    )    
}