import React from "react";
import { CiSearch } from "react-icons/ci";

export default function SearchHome() {
  const btn = "py-3 px-3 text-sm border-white border border-b-0";
  return (
    <div>
      <div className="flex">
        <button className={btn}>Buy</button>
        <button className={btn}>Rent</button>
      </div>
      <div>
        <form className="flex border text-sm bg-white ps-2">
          <input
            type="text"
            placeholder="City/Location"
            name="location"
            className="text-black"
          />
          <input
            type="text"
            placeholder="Min price"
            name="location"
            className="text-black"
          />
          <input
            type="text"
            placeholder="Max price"
            name="location"
            className="text-black"
          />
          <button className="bg-yellow-500 text-white px-4 w-30 py-2 flex justify-center">
            <CiSearch className="text-2xl" />
          </button>
        </form>
      </div>
    </div>
  );
}
