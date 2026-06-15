import React from "react";
import {
  MdOutlineHolidayVillage,
  MdOutlineMapsHomeWork,
  MdHouseSiding,
  MdOutlineVilla,
  MdOutlineHome,
  MdOutlineDomainAdd,
  MdOutlineFlood,
  MdOutlineApartment,
} from "react-icons/md";

const features = [
  {
    icon: <MdOutlineHolidayVillage className="w-8 h-8" />,
    title: "Single-Family Homes",
  },
  {
    icon: <MdOutlineMapsHomeWork className="w-8 h-8" />,
    title: "Tiny duplex house",
  },
  {
    icon: <MdHouseSiding className="w-8 h-8" />,
    title: "Modular/prefab homes",
  },
  {
    icon: <MdOutlineVilla className="w-8 h-8" />,
    title: "Luxurious estates",
  },
  {
    icon: <MdOutlineHome className="w-8 h-8" />,
    title: "Mid-Range Homes",
  },
  {
    icon: <MdOutlineDomainAdd className="w-8 h-8" />,
    title: "Ultra-Luxury Estates",
  },
  {
    icon: <MdOutlineFlood className="w-8 h-8" />,
    title: "Waterfront Homes",
  },
  {
    icon: <MdOutlineApartment className="w-8 h-8" />,
    title: "Condominiums (condos)",
  },
];

export default function Categories({ item }) {
  return (
    <section className="section-gap">
      <h2 className="sub-heading text-center heading-margin font-bold mb-10">
        Our Top Categories
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10 md:p-5 my-5 rounded-lg ">
        {features.map((item, index) => (
          <div
            className="flex flex-col gap-3 justify-center items-center bg-[#f0f0f0] border border-gray-200 px-2 py-8 rounded-lg"
            key={`feature-${index}`}
          >
            <span className="text-[14px]">{item.icon}</span>
            <h5 className="text-[15px] text-black text-center">{item.title}</h5>
          </div>
        ))}
      </div>
    </section>
  );
}
