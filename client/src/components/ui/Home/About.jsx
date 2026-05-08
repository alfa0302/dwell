import React from "react";
import Features from "./about/Features";

export default function About() {
  return (
    <section className="py-20 bg-slate-100" id="about">
      <h2 className="text-3xl font-semibold text-center">
        About <span className="text-yellow-500">Dwell</span>
      </h2>
      <div className="w-full flex justify-center items-center my-10">
        <div className="w-[45%] p-20 text-slate-800">
          <p className="mb-10 italic">
            Welcome to Dwell, a modern real estate platform built to simplify
            how people buy and rent, property. Whether you're searching for your
            first apartment, a family home, commercial space, or your next
            investment opportunity, our goal is to make the entire process
            faster, clearer, and more reliable.
          </p>
          <p className="mb-10 italic">
            We connect property seekers with verified listings, trusted agents,
            and real-time market insights all in one place. Our platform is
            designed to help users explore properties confidently through
            advanced search tools, detailed property information, virtual tours,
            location insights, and seamless communication features.
          </p>
          <a href="" className="btn-primary">
            See more
          </a>
        </div>
        <div className="h-150 corner-clip">
          <img
            src="/image2.png"
            alt="Image of a building"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <Features />
    </section>
  );
}
