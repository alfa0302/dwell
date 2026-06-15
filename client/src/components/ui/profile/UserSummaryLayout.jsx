import React, { useState } from "react";
import MyListing from "./MyListing";
import MySaved from "./MySaved";

export default function UserSummaryLayout() {
  const [choice, setChoice] = useState("listing");
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 p-1 border border-gray-200 rounded-full">
        <button
          onClick={() => setChoice("listing")}
          className={`cursor-pointer text-sm py-2 rounded-l-full ${choice === "listing" ? "bg-yellow-500 text-white" : "border border-gray-300 text-gray-600"}`}
        >
          My Listings
        </button>
        <button
          onClick={() => setChoice("saved")}
          className={`cursor-pointer text-sm py-2 rounded-r-full ${choice === "saved" ? "bg-yellow-500 text-white" : "border border-gray-300 text-gray-600"}`}
        >
          Saved Listings
        </button>
      </div>
      <div className="my-10">
        {choice === "listing" ? <MyListing /> : <MySaved />}
      </div>
    </div>
  );
}
