import React from "react";

export default function LoadingDots() {
  let color = "#eab308";
  let size = 120;
  const height = size * 0.25;
  return (
    <div className="w-full h-full flex justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 120 30"
        width={size}
        height={height}
        fill={color}
      >
        <circle className="loading-dot dot-1" cx="20" cy="15" r="8" />
        <circle className="loading-dot dot-2" cx="60" cy="15" r="8" />
        <circle className="loading-dot dot-3" cx="100" cy="15" r="8" />
      </svg>
    </div>
  );
}
