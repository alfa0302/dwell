import React, { useState } from "react";
import { IoMdCopy, IoMdCheckmark } from "react-icons/io";
import { IoHeartSharp } from "react-icons/io5";
import axiosInstance from "../../../utils/axiosInstance";
import { API_PATHS } from "../../../utils/apiPaths";

export default function SaveListing({ postId }) {
  const [copied, setCopied] = useState(false);
  const [favourite, setFavourite] = useState(false);
  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy URL:", err);
    }
  };
  const handleFavourite = async () => {
    try {
      const response = await axiosInstance.post(API_PATHS.SAVE.CREATE(postId));
      setFavourite(true);
      setTimeout(() => setFavourite(false), 2000);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex gap-10">
      <button
        className="flex items-center gap-2 bg-gray-300 text-gray-700 cursor-pointer px-4 py-2 rounded-lg text-sm"
        onClick={handleShare}
      >
        {copied ? (
          <IoMdCheckmark className="text-lg" />
        ) : (
          <IoMdCopy className="text-lg" />
        )}
        <span>{copied ? "Copied" : "Copy Link"}</span>
      </button>
      <button
        className="flex items-center gap-2 bg-gray-300 text-gray-700 cursor-pointer px-4 py-2 rounded-lg text-sm"
        onClick={handleFavourite}
      >
        {favourite ? (
          <IoMdCheckmark className="text-lg" />
        ) : (
          <IoHeartSharp className={`text-lg`} />
        )}

        <span>{favourite ? "Added" : "Favourite"}</span>
      </button>
    </div>
  );
}
