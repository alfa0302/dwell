import {
  FaSearch,
  FaCity,
  FaHome,
  FaBed,
  FaBath,
  FaRulerCombined,
  FaCar,
  FaPaw,
  FaBolt,
  FaTint,
  FaWifi,
  FaFire,
} from "react-icons/fa";

export const FILTER_FIELDS = [
  { name: "search", label: "Search", type: "text", icon: FaSearch },
  { name: "city", label: "City", type: "text", icon: FaCity },

  {
    name: "property",
    label: "Property",
    type: "select",
    icon: FaHome,
    options: ["any", "apartment", "house", "villa"],
  },

  {
    name: "minBedrooms",
    label: "Bedrooms",
    type: "number",
    icon: FaBed,
  },

  {
    name: "minBathrooms",
    label: "Bathrooms",
    type: "number",
    icon: FaBath,
  },

  {
    name: "minSize",
    label: "Size",
    type: "number",
    icon: FaRulerCombined,
  },

  {
    name: "minParking",
    label: "Parking",
    type: "number",
    icon: FaCar,
  },

  {
    name: "petsAllowed",
    label: "Pets",
    type: "select",
    icon: FaPaw,
    options: ["any", "yes", "no"],
  },

  {
    name: "electricityIncluded",
    label: "Electricity",
    type: "select",
    icon: FaBolt,
    options: ["any", "yes", "no"],
  },

  {
    name: "waterIncluded",
    label: "Water",
    type: "select",
    icon: FaTint,
    options: ["any", "yes", "no"],
  },

  {
    name: "internetIncluded",
    label: "Internet",
    type: "select",
    icon: FaWifi,
    options: ["any", "yes", "no"],
  },

  {
    name: "gasIncluded",
    label: "Gas",
    type: "select",
    icon: FaFire,
    options: ["any", "yes", "no"],
  },
];
