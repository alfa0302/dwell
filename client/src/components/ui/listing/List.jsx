import React from "react";
import PropertyListBox from "./PropertyListBox";

export default function List({ properties }) {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:px-20 px-10">
      {properties.map((item, index) => (
        <PropertyListBox item={item} key={`list_${index}`} />
      ))}
    </div>
  );
}
