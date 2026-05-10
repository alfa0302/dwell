import React from "react";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { FaBed, FaBath, FaRegHeart } from "react-icons/fa";
import { MdOutlineChatBubbleOutline } from "react-icons/md";
import { formatPrice } from "../../../utils/helper";

export default function List({ properties }) {
  return (
    <div className="flex flex-col gap-5 oveflow-y-auto">
      {properties.map((item, index) => (
        <Link to={`/list/${item.id}`} key={`property-${index}`}>
          <div className="flex border border-gray-200 rounded-lg items-stretch">
            <div className="w-[40%]">
              <img
                src={item.images[0]}
                alt="property image"
                className="h-full w-full object-cover rounded-l-lg"
              />
            </div>
            <div className="p-5 flex flex-col justify-start items-start flex-1 gap-3">
              <div className="flex gap-3 self-end">
                <FaRegHeart className="p-1 text-2xl text-gray-600 border rounded-full cursor-pointer" />
                <MdOutlineChatBubbleOutline className="p-1 text-2xl text-gray-600 border rounded-full cursor-pointer" />
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <div className="flex items-center gap-1  text-gray-600">
                <CiLocationOn className="text-lg" />{" "}
                <span>{item.location}</span>
              </div>
              <span className="py-1 px-2  bg-yellow-200 text-center text-md font-semibold rounded-lg text-gray-600">
                AED {formatPrice(item.price)}
                {item.type === "rent" ? "/month" : ""}
              </span>
              <div className="flex gap-5">
                <div className="flex items-center gap-2 text-gray-600">
                  <FaBed />
                  <span>{item.bedrooms} Bedroom</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <FaBath />
                  <span>{item.bathrooms} Bathroom</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
