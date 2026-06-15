import React from "react";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";

const style = {
  backgroundImage: "linear-gradient(rgba(0,0,0,0.15)),url('/ready-to.png')",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <section className="flex md:p-10 p-2">
      <div
        style={style}
        className="min-h-[80vh] w-full rounded-lg flex flex-col items-center justify-center gap-10 py-20"
      >
        <h2 className="sub-heading text-white text-center">
          Find the perfect place <br /> to call home
        </h2>
        <p className="text-white lg:w-[40%] md:w-[70%] w-[90%] text-center">
          Explore a curated collection of properties designed to match your
          lifestyle, budget, and future aspirations.
        </p>
        <Link to="/list">
          <button className="bg-black hover:bg-neutral-800 transition-colors px-6 py-3.5 md:px-8 md:py-4 text-white text-sm md:text-base font-medium rounded-xl shadow-md cursor-pointer">
            Explore Properties
          </button>
        </Link>
      </div>
    </section>
  );
}
