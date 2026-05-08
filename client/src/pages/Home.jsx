import React from "react";
import MainLayout from "../components/layout/MainLayout";
import Hero from "../components/ui/Home/Hero";
import About from "../components/ui/Home/About";
import Contact from "../components/ui/Home/Contact";

export default function Home() {
  return (
    <div className="relative">
      <MainLayout>
        <Hero />
        <About />
        <Contact />
      </MainLayout>
    </div>
  );
}
