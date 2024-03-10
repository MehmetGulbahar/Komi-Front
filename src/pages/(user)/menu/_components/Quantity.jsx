import React from "react";

export default function Quantity({ onChangeQuantity }) {
  const handleQuantityChange = (event) => {
    const selectedQuantity = parseInt(event.target.value, 10);
    onChangeQuantity(selectedQuantity);
  };
  return (
    <select
      className="select select-bordered select-sm w-full max-w-xs"
      defaultValue="1"
      onChange={handleQuantityChange}
    >
      <option disabled>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
    </select>
  );
}