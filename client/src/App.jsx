import React, { use, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import Home from "./pages/Home";
import Listing from "./pages/Listing";
import PropertyList from "./pages/PropertyList";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import useAuthStore from "./store/authStore";
import ProtectRoute from "./pages/ProtectRoute";

export default function App() {
  // const getCurrentUser = useAuthStore((state)=>state.getCurrentUser)
  // useEffect(()=>{
  //   getCurrentUser();
  // },[])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/list"
          element={
            <ProtectRoute>
              <Listing />
            </ProtectRoute>
          }
        />
        <Route
          path="/list/:id"
          element={
            <ProtectRoute>
              <PropertyList />
            </ProtectRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectRoute>
              <Profile />
            </ProtectRoute>
          }
        />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}
