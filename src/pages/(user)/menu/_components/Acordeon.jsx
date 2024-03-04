import React from "react";
import Card from "./Card";

const products = [
  {
    imageUrl:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    title: "Another Product",
    description: "Description for another product.",
  },
  {
    imageUrl:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    title: "Another Product",
    description: "Description for another product.",
  },
  {
    imageUrl:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    title: "Another Product",
    description: "Description for another product.",
  },
];

export default function Acordeon() {
  return (
    <div className="flex flex-wrap justify-center gap-5 m-2">
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">Starters</div>
        <div className="collapse-content flex flex-wrap justify-center gap-5 m-2">
          {products.map((product, index) => (
            <Card
              key={index} // Ensure each Card has a unique key
              imageUrl={product.imageUrl}
              title={product.title}
              description={product.description}
            />
          ))}
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">Main Courses</div>

        <div className="collapse-content flex flex-wrap justify-center gap-5 m-2">
          {products.map((product, index) => (
            <Card
              key={index} // Ensure each Card has a unique key
              imageUrl={product.imageUrl}
              title={product.title}
              description={product.description}
            />
          ))}
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">Dessert</div>

        <div className="collapse-content flex flex-wrap justify-center gap-5 m-2">
          {products.map((product, index) => (
            <Card
              key={index} // Ensure each Card has a unique key
              imageUrl={product.imageUrl}
              title={product.title}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
