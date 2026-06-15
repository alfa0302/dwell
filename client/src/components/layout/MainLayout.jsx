import React from "react";
import Navbar from "./Navbar";
import Footer from "../ui/Footer";

export default function ({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
