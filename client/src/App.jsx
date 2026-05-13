import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import Home from "./pages/Home";
import Listing from "./pages/Listing";
import PropertyList from "./pages/PropertyList";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<Listing />} />
        <Route path="/list/:id" element={<PropertyList />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}
