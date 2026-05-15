import React from "react";
import PropertyListBox from "./PropertyListBox";

export default function List({ properties }) {
  return (
    <div className="grid grid-cols-3 gap-5">
      {properties.map((item, index) => (
        <PropertyListBox item={item} key={`list_${index}`} />
      ))}
    </div>
  );
}
