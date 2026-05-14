import React, { useState } from "react";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";

export default function () {
  const [show, setShow] = useState("login");
  return (
    <div className="flex">
      <div className="md:w-[50%] md:block hidden h-screen relative">
        <img
          src="/auth.png"
          alt="Auth page image"
          className="object-cover h-full w-full gradient-to-r from-0% to-100%"
        />
        <div className="absolute inset-0 z-5 flex items-center justify-end flex-col gap-3 pb-10">
          <h2 className="text-[3vw] text-white font-semibold">
            Find Your Perfect Home
          </h2>
          <p className="text-white text-sm font-semibold">
            Find your place in the world, effortlessly.
          </p>
        </div>
      </div>
      <div className="h-screen w-screen md:w-[50%] flex justify-center items-center">
        {show === "login" ? (
          <Login setShow={setShow} />
        ) : (
          <SignUp setShow={setShow} />
        )}
      </div>
    </div>
  );
}
