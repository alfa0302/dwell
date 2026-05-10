import React from "react";
import Navbar from "./Navbar";

export default function PageLayout({ children }) {
  return (
    <div className="">
      <Navbar theme="dark" />
      <div>{children}</div>
    </div>
  );
}
