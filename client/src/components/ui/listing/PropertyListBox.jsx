import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoBedOutline } from "react-icons/io5";
import { PiBathtub } from "react-icons/pi";
import { BiArea } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { formatPrice } from "../../../utils/helper";

export default function PropertyListBox({
  item,
  showDelete = false,
  deleteSaved = () => {},
}) {
  return (
    <div className="border border-gray-300 p-4 sm:p-5 rounded-lg relative h-full flex flex-col bg-white">
      <div className="w-full overflow-hidden rounded-lg">
        <img
          src={
            item?.images?.[0] || "https://placehold.co/600x400?text=No+Image"
          }
          alt="property image"
          className="w-full h-52 sm:h-60 md:h-64 object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="mt-4 flex flex-col flex-1">
        <p className="flex gap-1 items-center text-gray-500 text-xs sm:text-sm">
          <HiOutlineLocationMarker className="shrink-0" />
          <span className="truncate">{item?.location?.address || "N/A"}</span>
        </p>

        <p className="text-lg sm:text-xl font-semibold text-gray-900 mt-3 sm:mt-4 line-clamp-2">
          {item?.title || "Untitled Property"}
        </p>

        <div className="grid grid-cols-3 gap-2 mt-5 text-xs sm:text-sm font-medium text-gray-600">
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 items-center justify-center lg:flex-col">
            <IoBedOutline className="text-base sm:text-lg" />
            <span className="text-center">
              {item?.details?.bedrooms ?? 0} Bed
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 items-center justify-center lg:flex-col">
            <PiBathtub className="text-base sm:text-lg" />
            <span className="text-center">
              {item?.details?.bathrooms ?? 0} Bath
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 items-center justify-center lg:flex-col">
            <BiArea className="text-base sm:text-lg" />
            <span className="text-center">
              {item?.details?.size ?? 0} SQ FT
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-auto pt-6">
          <p className="text-xl sm:text-2xl font-bold text-gray-900">
            AED {item?.price ? formatPrice(item.price) : "0"}
            {item?.purpose === "rent" && (
              <span className="text-sm sm:text-base font-medium text-gray-500">
                /month
              </span>
            )}
          </p>

          <Link
            to={`/list/${item?._id}`}
            className="btn-primary flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm sm:text-base font-medium sm:w-auto w-full"
          >
            <span>View Details</span>
            <FaArrowRightLong className="text-sm" />
          </Link>
        </div>
      </div>

      {showDelete && (
        <button
          className="absolute top-3 right-3 p-2 bg-red-100 rounded-full cursor-pointer hover:bg-red-200 transition-colors"
          onClick={deleteSaved}
        >
          <MdDelete className="text-red-500 text-lg" />
        </button>
      )}
    </div>
  );
}
