import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoBedOutline } from "react-icons/io5";
import { PiBathtub } from "react-icons/pi";
import { BiArea } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import { formatPrice } from "../../../utils/helper";

export default function PropertyListBox({ item }) {
  return (
    <div className="border border-gray-300 p-5 rounded-lg">
      <div className="w-full">
        <img
          src={item.images[0]}
          alt="property image"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="mt-5 flex flex-col">
        <p className="flex gap-1 items-center text-gray-600 text-sm">
          <HiOutlineLocationMarker className="font-bold" />
          <span>{item.location.address}</span>
        </p>
        <p className="text-xl font-semibold mt-5">{item.title}</p>
        <div className="flex items-center justify-between mt-5 text-[16px]font-semibold text-gray-600">
          <div className="flex gap-2 items-center">
            <IoBedOutline />
            <span>{item.details.bedrooms} Bed Room</span>
          </div>
          <div className="flex gap-2 items-center">
            <PiBathtub />
            <span>{item.details.bathrooms} Bath</span>
          </div>
          <div className="flex gap-2 items-center">
            <BiArea />
            <span>{item.details.size} SQ FT</span>
          </div>
        </div>
        <div className="flex justify-between mt-7">
          <p className="text-xl font-semibold">
            AED{formatPrice(item.price)}
            {item.purpose === "rent" ? "/month" : ""}
          </p>
          <Link
            to={`/list/${item._id}`}
            className="btn-primary flex items-center gap-2 rounded-lg"
          >
            <span>View Details</span>
            <FaArrowRightLong />
          </Link>
        </div>
      </div>
    </div>
  );
}
