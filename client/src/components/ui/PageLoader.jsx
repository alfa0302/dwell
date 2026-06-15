import React from "react";

export default function PageLoader() {
  return (
    <div className="fixed inset-0 bg-yellow-500 flex justify-center items-center">
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="spinner">
          <circle
            className="path"
            cx="60"
            cy="60"
            r="40"
            fill="none"
            stroke="white"
            strokeWidth="8"
          />
        </g>
      </svg>
    </div>
  );
}
