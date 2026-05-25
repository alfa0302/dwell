import React from "react";
import Logo from "../ui/Logo";
import useAuthStore from "../../store/authStore";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../utils/apiPaths";

export default function Navbar({ theme = "light" }) {
  const user = useAuthStore((state) => state.user);
  return (
    <header className="my-5 absolute z-50 left-0 right-0 top-0">
      <div
        className={`mx-10 px-5 py-2 flex justify-between items-center ${theme !== "light" ? "bg-white rounded-xl" : "bg-none"}`}
      >
        <div className="flex gap-10 items-center">
          <Link className="flex items-center" to="/">
            <Logo className={`h-10 ${theme === "light" ? "text-white" : ""}`} />
            <div
              className={`font-semibold ${theme === "light" ? "text-white" : ""}`}
            >
              Dwell
            </div>
          </Link>
        </div>
        <ul
          className={`flex gap-10 text-sm ${theme === "light" ? "text-white" : "text-black font-semibold"}`}
        >
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/list">Listings</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        {user ? (
          <div className="flex gap-5 items-center justify-center text-sm">
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
          <div className="flex gap-5 items-center justify-center text-sm">
            <button className="btn-primary">Login</button>
            <button className="btn-secondary">Sign Up</button>
          </div>
        )}
      </div>
    </header>
  );
}
