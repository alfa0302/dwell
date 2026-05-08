import React from "react";

const achievements = [
  { desc: "Years of Experience", value: 25, plus: true },
  { desc: "Awards Earned", value: 12 },
  { desc: "Properties Ready", value: 1500, plus: true },
];

export default function Achievements() {
  return (
    <div className="flex gap-5">
      {achievements.map((item, index) => (
        <div className="flex flex-col gap-1" key={`achievement-${index}`}>
          <div className="text-4xl font-semibold">
            {item.value}
            {item.plus ? " +" : ""}
          </div>
          <div className="text-shadow-2xl shadow-white">{item.desc}</div>
        </div>
      ))}
    </div>
  );
}
