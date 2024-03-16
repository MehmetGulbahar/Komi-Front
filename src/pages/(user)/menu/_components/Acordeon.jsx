import React, { useEffect, useState } from "react";
import Card from "./Card";
import Check from "./Check";
import Receipt from "./Receipt";

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
  const [checkItems, setCheckItems] = useState([]);
  const [ordersWithNotes, setOrdersWithNotes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/v1/food/all")
      .then((response) => response.json())
      .then((data) => setFoods(data))
      .catch((error) => console.error("Error fetching foods:", error));
  }, []);

  const filterFoodsByCourse = (course) => {
    return foods.filter((food) => food.course === course);
  };
  return (
    <div className="flex  w-full md:w-2/3 flex-wrap justify-center gap-3 m-2">
      {/* Starter Cards */}
      <div className="collapse collapse-plus bg-slate-100">
        <input type="checkbox" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">Starters</div>
        <div className="collapse-content flex flex-wrap justify-center gap-5 m-2">
          {filterFoodsByCourse("APPETIZER").map((food, index) => (
            <Card
              key={index}
              imageUrl={food.imageLink.link}
              title={food.name}
              preparationTime={food.preparationTime}
              description={food.description}
              cost={food.price}
              addItemToCheckItems={() => {
                addItemToCheckItems(food.name, food.description, food.price);
                setCheckItems((prevItems) => [
                  ...prevItems,
                  {
                    name: food.name,
                    detail: food.description,
                    cost: food.price,
                  },
                ]);
              }}
              addOrderWithNotes={(note) => {
                addOrderWithNotes(note);
                setOrdersWithNotes((prevNotes) => [...prevNotes, { note }]);
              }}
            />
          ))}
        </div>
      </div>
      {/* Main Course Cards */}
      <div className="collapse collapse-plus bg-slate-100">
        <input type="checkbox" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">Main Courses</div>

        <div className="collapse-content flex flex-wrap justify-center gap-5 m-2">
          {filterFoodsByCourse("MAIN").map((food, index) => (
            <Card
              key={index}
              imageUrl={food.imageLink.link}
              title={food.name}
              description={food.description}
              cost={food.price}
              addItemToCheckItems={() => {
                addItemToCheckItems(food.name, food.description, food.price);
                setCheckItems((prevItems) => [
                  ...prevItems,
                  {
                    name: food.name,
                    detail: food.description,
                    cost: food.price,
                  },
                ]);
              }}
              addOrderWithNotes={(note) => {
                addOrderWithNotes(note);
                setOrdersWithNotes((prevNotes) => [...prevNotes, { note }]);
              }}
            />
          ))}
        </div>
      </div>
      {/* Dessert Cards */}
      <div className="collapse collapse-plus bg-slate-100">
        <input type="checkbox" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">Dessert</div>

        <div className="collapse-content flex flex-wrap justify-center gap-5 m-2">
          {filterFoodsByCourse("DESSERT").map((food, index) => (
            <Card
              key={index}
              imageUrl={food.imageLink.link}
              title={food.name}
              description={food.description}
              cost={food.price}
              addItemToCheckItems={() => {
                addItemToCheckItems(food.name, food.description, food.price);
                setCheckItems((prevItems) => [
                  ...prevItems,
                  {
                    name: food.name,
                    detail: food.description,
                    cost: food.price,
                  },
                ]);
              }}
              addOrderWithNotes={(note) => {
                addOrderWithNotes(note);
                setOrdersWithNotes((prevNotes) => [...prevNotes, { note }]);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

