import React from "react";
import SearchHome from "./hero/SearchHome";
import Achievements from "./hero/Achievements";

export default function Hero() {
  return (
    <section className="w-screen h-screen relative">
      <img
        src="/hero2.png"
        alt="Hero Images"
        className="h-full w-full object-cover absolute top-0 left-0 right-0 -z-1"
      />
      <div className="h-full flex flex-col justify-center items-start md:w-[70%] w-[95%] mx-auto text-white gap-5 pt-20">
        <h1 className="md:text-6xl text-4xl leading-[1.1] font-semibold">
          Find a Place That
          <br />
          Feels Like Home
        </h1>
        <p className="font-semibold italic">
          Discover modern homes, trusted agents,
          <br /> and neighborhoods tailored to your lifestyle.
        </p>
        <div className="flex flex-col gap-5">
          <SearchHome />
          <Achievements />
        </div>
      </div>
    </section>
  );
}
