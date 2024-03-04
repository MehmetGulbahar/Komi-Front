import React from "react";
import Acordeon from "./_components/Acordeon";

const products = [
  {
    imageUrl: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    title: "Shoes!",
    description: "Comin'?",
    buttonText: "ORDER"
  },
  {
    imageUrl: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    title: "Another Product",
    description: "Description for another product.",
    buttonText: "ORDER"
  },
  {
    imageUrl: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    title: "Another Product",
    description: "Description for another product.",
    buttonText: "ORDER"
  }
];

export default function index() {
  return (
    <div>
      <Acordeon/>
    <div className="flex flex-wrap justify-center gap-5 m-2">
   

      </div>
      </div>
  );
}