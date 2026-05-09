import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function SearchHome() {
  const [formData, setFormData] = useState({
    location: "",
    minPrice: "",
    maxPrice: "",
    category: "buy",
  });
  const [selectedButton, setSelectedButton] = useState("b1");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const handleClick = (value) => {
    setFormData((prev) => ({
      ...prev,
      category: value,
    }));
  };
  return (
    <div>
      <div className="flex">
        <button
          className={`py-3 px-3 text-sm cursor-pointer text-white ${selectedButton === "b1" ? "bg-black text-white" : "border border-b-0 border-r-0 border-white bg-transparent"}`}
          onClick={() => {
            handleClick("buy");
            setSelectedButton("b1");
          }}
        >
          Buy
        </button>
        <button
          className={`py-3 px-3 text-sm cursor-pointer text-white ${selectedButton === "b2" ? "bg-black text-white" : " border border-b-0 border-l-0 border-white bg-transparent"}`}
          onClick={() => {
            handleClick("rent");
            setSelectedButton("b2");
          }}
        >
          Rent
        </button>
      </div>
      <div>
        <form
          className="flex border text-sm bg-white ps-2"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="City/Location"
            name="location"
            className="text-black outline-none"
            value={formData.location}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Min price"
            name="minPrice"
            className="text-black outline-none"
            value={formData.minPrice}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Max price"
            name="maxPrice"
            className="text-black outline-none"
            value={formData.maxPrice}
            onChange={handleChange}
          />
          <button
            className="bg-yellow-500 text-white px-4 w-30 py-2 flex justify-center cursor-pointer"
            type="submit"
          >
            <CiSearch className="text-2xl" />
          </button>
        </form>
      </div>
    </div>
  );
}
