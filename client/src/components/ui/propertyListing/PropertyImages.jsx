import React from "react";

export default function PropertyImages({ images }) {
  return (
    <div className="flex gap-3 items-stretch">
      <div className="w-[70%]">
        <img
          src={images[0]}
          alt="property image"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="flex-1 flex flex-col gap-3 justify-between">
        <img src={images[1]} alt="property image" className="rounded-lg" />
        <img src={images[2]} alt="property image" className="rounded-lg" />
        <img src={images[3]} alt="property image" className="rounded-lg" />
      </div>
    </div>
  );
}
