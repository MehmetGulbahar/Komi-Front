import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

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
    <th>
      <button className="btn btn-ghost btn-xs">details</button>
    </th>
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
                {/** 
                 * <label>
                <input type="checkbox" className="checkbox" />
              </label>
                 */}
              
            </th>
            <th>Dish</th>
            <th>Ingredients</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((dish, index) => (
            <TableRow dish={dish} id={index + 1} />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
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