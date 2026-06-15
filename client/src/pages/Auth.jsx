import React, { useState } from "react";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";

export default function () {
  const [show, setShow] = useState("login");
  return (
    <div className="flex flex-col md:flex-row min-h-screen lg:h-auto justify-center items-stretch">
      <div className="hidden md:block md:w-1/2 relative">
        <img
          src="/auth.png"
          alt="Auth page image"
          className="absolute inset-0 object-cover h-full w-full"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-end gap-3 pb-10">
          <h2 className="text-[3vw] text-white font-semibold text-center px-4">
            Find Your Perfect Home
          </h2>
          <p className="text-white text-sm font-semibold text-center px-4">
            Find your place in the world, effortlessly.
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center py-5 overflow-auto">
        {show === "login" ? (
          <Login setShow={setShow} />
        ) : (
          <SignUp setShow={setShow} />
        )}
      </div>
    </div>
  );
}
