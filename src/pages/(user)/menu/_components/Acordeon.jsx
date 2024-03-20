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
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex === activeTab ? null : tabIndex);
  };
  const filterFoodsByCourse = (course) => {
    return foods.filter((food) => food.course === course);
  };
  return (
    <div className=" flex w-full flex-wrap  gap-3 m-2">
      {/* Starter Cards */}
      <div role="tablist" className="tabs tabs-lifted  w-full text-wrap">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className={`tab ${activeTab === 1 ? 'tab-active' : ''}`}
          onClick={() => handleTabClick(1)}
          style={{ width: "8rem"}}
          aria-label="Starters"
          
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          
          {filterFoodsByCourse("APPETIZER").map((food, index) => (
            <Card
              key={index}
              imageUrl={food.imageLink.link}
              title={food.name}
              preparationTime={food.preparationTime}
              description={food.description}
              cost={food.price}
              addItemToCheckItems={() => {
                addItemToCheckItems(food.name, food.description, food.price, food.imageLink.link);
                setCheckItems((prevItems) => [
                  ...prevItems,
                  {
                    name: food.name,
                    detail: food.description,
                    cost: food.price,
                    imageUrl: food.imageLink.link
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

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className={`tab ${activeTab === 2 ? 'tab-active' : ''}`}
          onClick={() => handleTabClick(2)}
          style={{ width: "8rem"}}
          aria-label="Main Courses"
          
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          
          {filterFoodsByCourse("MAIN").map((food, index) => (
            <Card
              key={index}
              imageUrl={food.imageLink.link}
              title={food.name}
              description={food.description}
              cost={food.price}
              addItemToCheckItems={() => {
                addItemToCheckItems(food.name, food.description, food.price, food.imageLink.link);
                setCheckItems((prevItems) => [
                  ...prevItems,
                  {
                    name: food.name,
                    detail: food.description,
                    cost: food.price,
                    imageUrl: food.imageLink.link
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

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className={`tab ${activeTab === 3 ? 'tab-active' : ''}`}
          onClick={() => handleTabClick(3)}
          style={{ width: "8rem"}}
          aria-label="Desserts"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          
          {filterFoodsByCourse("DESSERT").map((food, index) => (
            <Card
              key={index}
              imageUrl={food.imageLink.link}
              title={food.name}
              description={food.description}
              cost={food.price}
              addItemToCheckItems={() => {
                addItemToCheckItems(food.name, food.description, food.price, food.imageLink.link);
                setCheckItems((prevItems) => [
                  ...prevItems,
                  {
                    name: food.name,
                    detail: food.description,
                    cost: food.price,
                    imageUrl: food.imageLink.link
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
