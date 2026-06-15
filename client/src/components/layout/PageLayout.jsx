import React from "react";
import Navbar from "./Navbar";
import ScrollToTopButton from "../ui/ScrollToTopButton";
import Footer from "../ui/Footer";

export default function PageLayout({ children }) {
  return (
    <div className="">
      <Navbar theme="dark" />
      <div className="mt-30">{children}</div>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}
