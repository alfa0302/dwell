import React from "react";
import {
  MdOutlineVerified,
  MdOutlineHouse,
  MdTune,
  MdOutlineMessage,
  MdOutlineBookmarks,
  MdInsights,
} from "react-icons/md";
const features = [
  {
    icon: <MdOutlineVerified className="w-10 h-10" />,
    title: "Verified property listings for sale and rent",
  },
  {
    icon: <MdOutlineHouse className="w-10 h-10" />,
    title: "Residential and commercial properties",
  },
  {
    icon: <MdTune className="w-10 h-10" />,
    title: "Smart filters for location, price, amenities, and property type",
  },
  {
    icon: <MdOutlineMessage className="w-10 h-10" />,
    title: "Direct communication with property owners and agents",
  },
  {
    icon: <MdOutlineBookmarks className="w-10 h-10" />,
    title: "Saved searches and personalized recommendations",
  },
  {
    icon: <MdInsights className="w-10 h-10" />,
    title: "Market trends and neighborhood insights",
  },
];

export default function Features({ item }) {
  return (
    <div className="grid grid-cols-3 px-20 gap-20 mt-30">
      {features.map((item) => (
        <div className="bg-white text-slate-800 flex flex-col items-center gap-3 p-5 rounded-lg hover:shadow-2xl italic">
          <span className="">{item.icon}</span>
          <h5 className="text-center">{item.title}</h5>
        </div>
      ))}
    </div>
  );
}
