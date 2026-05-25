import React from "react";
import { LuSofa } from "react-icons/lu";
import { IoCarSport, IoBulbOutline } from "react-icons/io5";
import { MdOutlinePets, MdOutlineWaterDrop } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { PiCookingPotBold } from "react-icons/pi";
const propertyFeatures = [
  {
    key: "furnished",
    labelTrue: "Furnished",
    labelFalse: "Not furnished",
    icon: LuSofa,
    type: "boolean",
    path: "details.furnished",
  },
  {
    key: "parkingSpaces",
    label: (v) => `${v} Parking`,
    icon: IoCarSport,
    type: "value",
    path: "details.parkingSpaces",
  },
  {
    key: "petsAllowed",
    labelTrue: "Pets allowed",
    labelFalse: "No pets",
    icon: MdOutlinePets,
    type: "boolean",
    path: "details.petsAllowed",
  },
  {
    key: "electricityIncluded",
    labelTrue: "Electricity included",
    labelFalse: "Electricity not included",
    icon: IoBulbOutline,
    type: "boolean",
    path: "utilities.electricityIncluded",
  },
  {
    key: "waterIncluded",
    labelTrue: "Water included",
    labelFalse: "Water not included",
    icon: MdOutlineWaterDrop,
    type: "boolean",
    path: "utilities.waterIncluded",
  },
  {
    key: "internetIncluded",
    labelTrue: "Internet included",
    labelFalse: "Internet not included",
    icon: FaWifi,
    type: "boolean",
    path: "utilities.internetIncluded",
  },
  {
    key: "gasIncluded",
    labelTrue: "Gas included",
    labelFalse: "Gas not included",
    icon: PiCookingPotBold,
    type: "boolean",
    path: "utilities.gasIncluded",
  },
];

export default function Details({ details, utilities }) {
  const data = { details, utilities };
  const getValue = (obj, path) => {
    return path.split(".").reduce((acc, key) => acc?.[key], obj);
  };
  return (
    <div className="flex flex-wrap gap-x-10 gap-y-5">
      {propertyFeatures.map((item) => {
        const Icon = item.icon;
        const value = getValue(data, item.path);
        let text;
        if (item.type === "boolean") {
          text = value ? item.labelTrue : item.labelFalse;
        } else {
          text = item.label(value);
        }
        return (
          <div
            key={item.key}
            className="flex items-center gap-2 bg-gray-300 py-1 px-2 rounded-lg text-gray-700"
          >
            <Icon />
            <span>{text}</span>
          </div>
        );
      })}
    </div>
  );
}
