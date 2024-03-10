import React, { useEffect, useState } from "react";
import Card from "./Card";

const products = [
  {
    imageUrl:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    title: "Another Producta",
    description: "Description for another product.",
    cost: 100.0,
  },
  {
    imageUrl:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    title: "Another Productb",
    description: "Description for another product.",
    cost: 150.0,
  },
  {
    imageUrl:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    title: "Another Product3",
    description: "Description for another product.",
    cost: 175.0,
  },
];

export default function Acordeon({ addItemToCheckItems, addOrderWithNotes }) {
  const [foods, setFoods] = useState([]);
  const imgUrl =
    "https://firebasestorage.googleapis.com/v0/b/komiautomation.appspot.com/o/salad.jpg?alt=media&token=262b80b4-3f25-49a7-b246-2f5d050ee211";
  useEffect(() => {
    fetch("http://localhost:8080/api/v1/food/all")
      .then((response) => response.json())
      .then((data) => setFoods(data))
      .catch((error) => console.error("Error fetching foods:", error));
  }, []);

  return (
    <div className="flex  w-full md:w-2/3 flex-wrap justify-center gap-3 m-2">
      <div className="collapse collapse-plus bg-slate-100">
        <input type="checkbox" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">Starters</div>
        <div className="collapse-content flex flex-wrap justify-center gap-5 m-2">
          {foods.map((foods, index) => (
            <Card
              key={index}
              imageUrl={foods.imageLink.link}
              title={foods.name}
              description={foods.description}
              cost={foods.price}
              addItemToCheckItems={() =>
                addItemToCheckItems(foods.name, foods.description, foods.price)
              }
              addOrderWithNotes={addOrderWithNotes}
            />
          ))}
        </div>
      </div>
      <div className="collapse collapse-plus bg-slate-100">
        <input type="checkbox" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">Main Courses</div>

        <div className="collapse-content flex flex-wrap justify-center gap-5 m-2">
          {products.map((product, index) => (
            <Card
              key={index}
              imageUrl={product.imageUrl}
              title={product.title}
              cost={product.cost}
              description={product.description}
              addItemToCheckItems={() =>
                addItemToCheckItems(
                  product.title,
                  product.description,
                  product.cost
                )
              }
            />
          ))}
        </div>
      </div>
      <div className="collapse collapse-plus bg-slate-100">
        <input type="checkbox" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">Dessert</div>

        <div className="collapse-content flex flex-wrap justify-center gap-5 m-2">
          {products.map((product, index) => (
            <Card
              key={index}
              imageUrl={product.imageUrl}
              title={product.title}
              cost={product.cost}
              description={product.description}
              addItemToCheckItems={() =>
                addItemToCheckItems(
                  product.title,
                  product.description,
                  product.cost
                )
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
