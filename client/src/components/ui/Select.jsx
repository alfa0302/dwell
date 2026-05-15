import React from "react";

export default function Select({
  title,
  label,
  options,
  onChange,
  required = true,
}) {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={title}
        className={`text-sm ${required ? 'after:content-["_*"] after:text-red-500 after:text-lg after:align-middle' : ""}`}
      >
        {label}
      </label>

      <div className="border border-black py-2 px-3 rounded-lg flex justify-between gap-1">
        <select
          id={title}
          name={title}
          className="flex-1 outline-none text-sm bg-transparent"
          onChange={onChange}
          defaultValue=""
          required={required}
        >
          <option value="" disabled>
            Select {label}
          </option>

          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
