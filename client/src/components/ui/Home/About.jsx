import React from "react";

export default function About() {
  return (
    <section className="py-10 section-gap">
      <div className="flex flex-col md:flex-row items-center lg:items-stretch gap-5">
        <div className="w-full lg:w-[40%] md:w-[50%] flex flex-col items-center lg:items-start justify-between text-center lg:text-left">
          <h2 className="text-3xl sub-heading lg:text-5xl font-semibold tracking-tight text-neutral-900 leading-tight sub-heading">
            Invest in spaces <br className="hidden lg:inline" /> that inspire
            growth
          </h2>

          <img
            src="/image2.png"
            alt="Building exterior"
            className="h-80 w-80  object-cover mt-8 lg:mt-12 rounded-2xl shadow-sm"
          />
        </div>
        <div className="w-full lg:w-[60%] md:w-[50%] flex flex-col justify-center items-center lg:items-start text-center lg:text-left lg:gap-6 gap-8">
          <p className="text-xl md:text-2xl lg:text-4xl font-normal text-neutral-900 leading-relaxed md:leading-normal">
            We specialize in connecting people with properties that match their
            goals and aspirations.{" "}
            <span className="text-neutral-400 block mt-2 lg:inline lg:mt-0">
              Through expert guidance and dedicated support, we turn real estate
              dreams into reality.
            </span>
          </p>
          <button className="bg-black hover:bg-neutral-800 transition-colors px-6 py-3.5 md:px-8 md:py-4 text-white text-sm md:text-base font-medium rounded-xl shadow-md cursor-pointer">
            Know more about us
          </button>
        </div>
      </div>
    </section>
  );
}
