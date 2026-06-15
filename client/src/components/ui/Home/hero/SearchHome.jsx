import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

export default function SearchHome() {
  const [formData, setFormData] = useState({
    search: "",
    minPrice: "",
    maxPrice: "",
    category: "buy",
  });
  const [selectedButton, setSelectedButton] = useState("b1");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.search && !formData.minPrice && !formData.maxPrice) {
      return;
    }
    const queryParams = new URLSearchParams();
    if (formData.search) queryParams.append("search", formData.search);
    if (formData.minPrice) queryParams.append("minPrice", formData.minPrice);
    if (formData.maxPrice) queryParams.append("maxPrice", formData.maxPrice);
    if (formData.category) queryParams.append("purpose", formData.category);
    navigate(`/list?${queryParams.toString()}`);
  };
  const handleClick = (value) => {
    setFormData((prev) => ({
      ...prev,
      category: value,
    }));
  };
  const inputStyle =
    "rounded-lg p-1 focus:bg-transparent outline-none w-full border md:border-0";
  const buttonStyle =
    "border border-whitte text-white px-4 w-30 md:py-2 py-1 flex justify-center cursor-pointer rounded-lg w-full";
  return (
    <div className="flex flex-col gap-2 items-start">
      <div className="bg-[rgba(255,255,255,0.15)] rounded-lg  flex gap-1 p-1">
        <button
          className={`p-2 text-sm cursor-pointer text-white ${selectedButton === "b1" ? "bg-black text-white rounded-lg" : " border-white bg-transparent"}`}
          onClick={() => {
            handleClick("buy");
            setSelectedButton("b1");
          }}
        >
          Buy
        </button>
        <button
          className={`p-2 text-sm cursor-pointer text-white ${selectedButton === "b2" ? "bg-black text-white rounded-lg" : " border-white bg-transparent"}`}
          onClick={() => {
            handleClick("rent");
            setSelectedButton("b2");
          }}
        >
          Rent
        </button>
      </div>
      <form
        className="bg-[rgba(255,255,255,0.15)] flex md:flex-row flex-col items-start w-full gap-1 text-sm p-1  rounded-lg"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="City/Location"
          name="search"
          className={inputStyle}
          value={formData.search}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Min price"
          name="minPrice"
          className={inputStyle}
          value={formData.minPrice}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Max price"
          name="maxPrice"
          className={inputStyle}
          value={formData.maxPrice}
          onChange={handleChange}
        />
        <button className={buttonStyle} type="submit">
          <CiSearch className="text-2xl" />
        </button>
      </form>
    </div>
  );
}
