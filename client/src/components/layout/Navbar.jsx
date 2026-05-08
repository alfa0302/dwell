import React from "react";
import Logo from "../ui/Logo";

export default function Navbar({ theme = "light" }) {
  return (
    <header className="my-5 absolute z-50 left-0 right-0 top-0">
      <div className="w-[70%] mx-auto flex justify-between">
        <div className="flex gap-10 items-center">
          <div className="flex items-center">
            <Logo className={`h-10 ${theme === "light" ? "text-white" : ""}`} />
            <div
              className={`font-semibold ${theme === "light" ? "text-white" : ""}`}
            >
              Dwell
            </div>
          </div>
          <ul
            className={`flex gap-10 text-sm ${theme === "light" ? "text-white" : ""}`}
          >
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            {/* <li>
              <a href="#">Agents</a>
            </li> */}
          </ul>
        </div>
        <div className="flex gap-5 items-center justify-center text-sm">
          <button className="btn-primary">Login</button>
          <button className="btn-secondary">Sign Up</button>
        </div>
      </div>
    </header>
  );
}
