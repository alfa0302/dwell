import React from "react";
import PropertyListBox from "./PropertyListBox";

export default function List({ properties }) {
  return (
    <div className="flex flex-col gap-5 oveflow-y-auto">
      {properties.map((item, index) => (
        <PropertyListBox item={item} />
      ))}
    </div>
  );
}
