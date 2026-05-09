import React, { useState } from "react";
import { CiSearch, CiLocationOn, CiHome, CiDollar } from "react-icons/ci";
import { FaBed, FaBath } from "react-icons/fa";

export default function FilterForm() {
  const fieldStyle =
    "flex items-center gap-2 bg-white text-gray-500 text-sm py-2 px-3 rounded-2xl border border-gray-300";
  const inputStyle = "outline-none bg-transparent";

  const [formData, setFormData] = useState({
    location: "",
    type: "any",
    property: "any",
    minPrice: 0,
    maxPrice: 0,
    bedrooms: "1",
    bathrooms: "1",
  });

  return (
    <div className="mt-30 mb-10">
      {/* <h2 className="text-2xl font-semibold mb-4">Search..</h2> */}
      <div className="flex justify-center">
        <form className="inline-flex flex-wrap gap-3 items-center justify-center border border-gray-300 py-2 px-2 rounded-full">
          <div className={fieldStyle}>
            <CiLocationOn size={20} />
            <input
              type="text"
              name="location"
              placeholder="Location"
              className={inputStyle}
            />
          </div>
          <div className={fieldStyle}>
            <CiHome size={20} />
            <select
              name="type"
              id="type"
              className={inputStyle}
              defaultValue="any"
            >
              <option value="any">Any</option>
              <option value="rent">Rent</option>
              <option value="buy">Buy</option>
            </select>
          </div>
          <div className={fieldStyle}>
            <CiHome size={20} />
            <select
              name="property"
              id="property"
              className={inputStyle}
              defaultValue="any"
            >
              <option value="any">Any</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="condo">Condo</option>
              <option value="land">Land</option>
            </select>
          </div>
          <div className={fieldStyle}>
            <CiDollar size={20} />
            <input
              type="number"
              name="minPrice"
              placeholder="Min Price"
              className={inputStyle}
            />
          </div>
          <div className={fieldStyle}>
            <CiDollar size={20} />
            <input
              type="number"
              name="maxPrice"
              placeholder="Max Price"
              className={inputStyle}
            />
          </div>
          <div className={fieldStyle}>
            <FaBed size={16} />
            <select
              name="bedrooms"
              id="bedrooms"
              className={inputStyle}
              defaultValue="any"
            >
              <option value="any">Any</option>
              <option value="1">1 Bedroom</option>
              <option value="2">2 Bedrooms</option>
              <option value="3">3 Bedrooms</option>
              <option value="4">4 Bedrooms</option>
              <option value="5">5+ Bedrooms</option>
            </select>
          </div>
          <div className={fieldStyle}>
            <FaBath size={16} />
            <select
              name="bathrooms"
              id="bathrooms"
              className={inputStyle}
              defaultValue="any"
            >
              <option value="any">Any</option>
              <option value="1">1 Bathroom</option>
              <option value="2">2 Bathrooms</option>
              <option value="3">3 Bathrooms</option>
              <option value="4">4 Bathrooms</option>
              <option value="5">5+ Bathrooms</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-yellow-500 text-white font-bold p-2 rounded-full cursor-pointer"
          >
            <CiSearch size={22} />
          </button>
        </form>
      </div>
    </div>
  );
}
