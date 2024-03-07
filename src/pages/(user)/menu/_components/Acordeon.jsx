import React from "react";
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

export default function Acordeon({ addItemToCheckItems }) {
  return (
    <div className="flex  w-full md:w-2/3 flex-wrap justify-center gap-3 m-2">
      <div className="collapse collapse-plus bg-slate-100">
        <input type="checkbox" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">Starters</div>
        <div className="collapse-content flex flex-wrap justify-center gap-5 m-2">
          {products.map((product, index) => (
            <Card
              key={index}
              imageUrl={product.imageUrl}
              title={product.title}
              description={product.description}
              cost={product.cost}
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
