import React from "react";

export default function Quantitiy() {
  return (
    <select
      className="select select-bordered select-sm w-full max-w-xs"
      defaultValue="1"
    >
      <option disabled>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
    </select>
  );
}
