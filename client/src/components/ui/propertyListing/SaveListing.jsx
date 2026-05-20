import React from "react";
import { IoShareSocialSharp } from "react-icons/io5";
import { IoHeartSharp } from "react-icons/io5";

export default function SaveListing() {
  return (
    <div className="flex gap-10">
      <button className="flex items-center gap-2 bg-yellow-100 text-gray-700 cursor-pointer px-2 py-1 rounded-lg text-sm">
        <IoShareSocialSharp className="text-lg" />
        <span>Share</span>
      </button>
      <button className="flex items-center gap-2 bg-yellow-100 text-gray-700 cursor-pointer px-2 py-1 rounded-lg text-sm">
        <IoHeartSharp className={`text-lg`} />
        <span>Favourite</span>
      </button>
    </div>
  );
}
