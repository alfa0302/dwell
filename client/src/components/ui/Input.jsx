import React, { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

export default function Input({
  type,
  title,
  label,
  placeholder,
  value,
  onChange,
  required = true,
}) {
  const [showPassword, setShowPassword] = useState(false);
  if (type === "password") {
    return (
      <div className="flex flex-col gap-1">
        <label
          htmlFor={title}
          className={`text-sm ${required ? 'after:content-["_*"] after:text-red-500 after:text-lg after:align-middle' : ""}`}
        >
          {label}
        </label>
        <div className="border border-black py-2 px-3 rounded-lg flex justify-between gap-1">
          <input
            type={showPassword ? "text" : "password"}
            id={title}
            name={title}
            placeholder={placeholder}
            className="flex-1 outline-none text-sm"
            onChange={onChange}
            required={required}
            value={value}
          />
          <button
            className="text-gray-600 text-xl"
            onClick={() => setShowPassword((prev) => !prev)}
            type="button"
          >
            {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col gap-1">
        <label
          htmlFor={title}
          className={`text-sm ${required ? 'after:content-["_*"] after:text-red-500 after:text-lg after:align-middle' : ""}`}
        >
          {label}
        </label>
        <div className="border border-black py-2 px-3 rounded-lg flex justify-between gap-1">
          <input
            type="text"
            id={title}
            name={title}
            placeholder={placeholder}
            className="flex-1 outline-none text-sm"
            onChange={onChange}
            required={required}
          />
        </div>
      </div>
    );
  }
}
