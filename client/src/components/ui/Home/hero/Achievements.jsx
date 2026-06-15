import React from "react";

const achievements = [
  { desc: "Years of Experience", value: 25, plus: true },
  { desc: "Awards Earned", value: 12 },
  { desc: "Properties Ready", value: 1500, plus: true },
];

export default function Achievements() {
  return (
    <div className="flex md:gap-5 gap-2">
      {achievements.map((item, index) => (
        <div
          className="flex flex-col gap-1 bg-[rgba(255,255,255,0.15)] p-2 rounded-lg "
          key={`achievement-${index}`}
        >
          <div className="md:text-3xl text-xl font-semibold ">
            {item.value}
            {item.plus ? " +" : ""}
          </div>
          <div className="text-sm">{item.desc}</div>
        </div>
      ))}
    </div>
  );
}
