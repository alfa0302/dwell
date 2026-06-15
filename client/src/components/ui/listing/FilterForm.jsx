import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiSearch, CiLocationOn, CiMoneyCheck1 } from "react-icons/ci";
import { FaBed, FaBath, FaCar } from "react-icons/fa";
import {
  MdPets,
  MdHouseSiding,
  MdAttachMoney,
  MdOutlineLocationOn,
} from "react-icons/md";
import { RiSofaLine, RiBuilding4Line } from "react-icons/ri";

export default function FilterForm({ currentFilter }) {
  const navigate = useNavigate();

  const styles = {
    container: "mb-10 flex justify-center px-4 lg:px-20 px-10",

    form: `
    flex flex-wrap justify-center items-start gap-3 w-full
  `,

    field: `
    flex items-center gap-2
    border border-gray-300 rounded-lg
    px-4 py-2 bg-white text-sm text-gray-600
    w-full sm:w-[calc(50%-0.375rem)] md:w-[200px]
  `,

    input: `
    outline-none bg-transparent w-full
    text-gray-700 placeholder:text-gray-400
  `,

    select: `
    outline-none bg-transparent w-full
    text-gray-700 cursor-pointer
  `,

    submitButton: `
    flex items-center justify-center gap-2
    bg-yellow-500 text-white rounded-lg
    px-4 py-2 cursor-pointer text-sm
    w-full sm:w-[calc(50%-0.375rem)] md:w-[100px]
  `,
  };

  const [formData, setFormData] = useState({
    search: "",
    city: "",
    type: "any",
    property: "any",
    status: "any",
    minPrice: "",
    maxPrice: "",
    minBedrooms: "any",
    minBathrooms: "any",
    minSize: "",
    minParking: "any",
    furnished: "any",
    petsAllowed: "any",
    electricityIncluded: "any",
    waterIncluded: "any",
    internetIncluded: "any",
    gasIncluded: "any",
    amenities: "any",
  });

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      ...currentFilter,
    }));
  }, [currentFilter]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== "" && value !== "any" && value !== null) {
        params.set(key, value);
      }
    });
    navigate(`/list?${params.toString()}`);
  };

  const fields = [
    {
      name: "city",
      type: "input",
      inputType: "text",
      placeholder: "Location",
      icon: <MdOutlineLocationOn size={20} />,
    },
    {
      name: "type",
      type: "select",
      icon: <MdHouseSiding size={20} />,
      options: [
        { label: "Purpose", value: "any" },
        { label: "Rent", value: "rent" },
        { label: "Buy", value: "buy" },
      ],
    },
    {
      name: "property",
      type: "select",
      icon: <RiBuilding4Line size={20} />,
      options: [
        { label: "Property Type", value: "any" },
        { label: "Apartment", value: "apartment" },
        { label: "House", value: "house" },
        { label: "Condo", value: "condo" },
        { label: "Land", value: "land" },
      ],
    },
    {
      name: "minPrice",
      type: "input",
      inputType: "number",
      placeholder: "Min Price",
      icon: <MdAttachMoney size={20} />,
    },
    {
      name: "maxPrice",
      type: "input",
      inputType: "number",
      placeholder: "Max Price",
      icon: <MdAttachMoney size={20} />,
    },
    {
      name: "minBedrooms",
      type: "select",
      icon: <FaBed size={16} />,
      options: [
        { label: "Bedrooms", value: "any" },
        { label: "1+", value: "1" },
        { label: "2+", value: "2" },
        { label: "3+", value: "3" },
        { label: "4+", value: "4" },
        { label: "5+", value: "5" },
      ],
    },
    {
      name: "minBathrooms",
      type: "select",
      icon: <FaBath size={16} />,
      options: [
        { label: "Bathrooms", value: "any" },
        { label: "1+", value: "1" },
        { label: "2+", value: "2" },
        { label: "3+", value: "3" },
        { label: "4+", value: "4" },
      ],
    },
    {
      name: "minParking",
      type: "select",
      icon: <FaCar size={16} />,
      options: [
        { label: "Parking", value: "any" },
        { label: "1+", value: "1" },
        { label: "2+", value: "2" },
        { label: "3+", value: "3" },
      ],
    },
    {
      name: "furnished",
      type: "select",
      icon: <RiSofaLine size={20} />,
      options: [
        { label: "Furnished", value: "any" },
        { label: "Yes", value: "true" },
        { label: "No", value: "false" },
      ],
    },
    {
      name: "petsAllowed",
      type: "select",
      icon: <MdPets size={20} />,
      options: [
        { label: "Pets", value: "any" },
        { label: "Allowed", value: "true" },
        { label: "Not Allowed", value: "false" },
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        {fields.map((field) => (
          <div key={field.name} className={styles.field}>
            {field.icon}

            {field.type === "input" ? (
              <input
                type={field.inputType}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className={styles.input}
              />
            ) : (
              <select
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className={styles.select}
              >
                {field.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            )}
          </div>
        ))}

        <button type="submit" className={styles.submitButton}>
          Search
          <CiSearch size={22} />
        </button>
      </form>
    </div>
  );
}
