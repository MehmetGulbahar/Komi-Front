import React from "react";
import "./Card.css";

export default function Card({ imageUrl, title, description, buttonText }) {
  return (
    <div className="flex items-center justify-center">
      <div className="card card-compact w-full sm:w-72 md:w-96 lg:w-80 xl:w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-full h-36 sm:h-34 object-cover"
            src={imageUrl}
            alt={title}
          />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl font-semibold">
            {title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg">
            {description}
          </p>
          <div className="card-actions flex justify-end mt-4">
            <button className="btn btn-primary btn-circle text-2xl">
              <h1>+</h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
