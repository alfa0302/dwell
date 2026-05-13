import React, { useState } from "react";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";

export default function () {
  const [show, setShow] = useState("login");
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      {show === "login" ? (
        <Login setShow={setShow} />
      ) : (
        <SignUp setShow={setShow} />
      )}
    </div>
  );
}
