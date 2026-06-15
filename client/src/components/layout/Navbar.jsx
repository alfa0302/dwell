import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "../ui/Logo";
import useAuthStore from "../../store/authStore";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../utils/apiPaths";

export default function Navbar({ theme = "light" }) {
  const [isOpen, setIsOpen] = useState(false);
  const user = useAuthStore((state) => state.user);
  return (
    <header className="my-5 absolute z-50 left-0 right-0 top-0 px-4">
      <div
        className={`mx-auto max-w-7xl px-5 py-3 flex justify-between items-center ${
          theme !== "light" ? "bg-white rounded-xl" : ""
        }`}
      >
        <Link className="flex items-center" to="/">
          <Logo className={`h-10 ${theme === "light" ? "text-white" : ""}`} />
          <div
            className={`font-semibold ${theme === "light" ? "text-white" : ""}`}
          >
            Dwell
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul
          className={`hidden md:flex gap-10 text-sm ${
            theme === "light" ? "text-white" : "text-black font-semibold"
          }`}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/list">Listings</Link>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        {/* Desktop Auth */}
        <div className="hidden md:flex">
          {user ? (
            <div className="flex gap-5 items-center text-sm">
              <img
                src={user?.avatar}
                alt="profile picture"
                className="h-8 w-8 object-cover object-top rounded-full border border-gray-200"
              />

              <Link to="/profile">
                <button className="btn-secondary">Profile</button>
              </Link>
            </div>
          ) : (
            <div className="flex gap-5 items-center text-sm">
              <Link to="/auth">
                <button className="btn-secondary rounded-lg">Login</button>
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${
            theme === "light" ? "text-white" : "text-black"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden mx-4 mt-1 rounded-xl px-5 py-2 text-sm ${
            theme === "light"
              ? "bg-[rgba(255,255,255,0.15)]  text-white"
              : "bg-white border border-gray-300"
          }`}
        >
          <ul className="flex flex-row justify-between  items-center gap-4 font-medium">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/list" onClick={() => setIsOpen(false)}>
                Listings
              </Link>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="/profile">
                {user ? (
                  <div className="flex items-center gap-4">
                    <img
                      src={user?.avatar}
                      alt="profile picture"
                      className="h-10 w-10 object-cover object-top rounded-full border border-gray-200"
                    />
                  </div>
                ) : (
                  <div className="flex flex-col gap-3">
                    <button className="btn-primary">Login</button>
                    <button className="btn-secondary">Sign Up</button>
                  </div>
                )}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
