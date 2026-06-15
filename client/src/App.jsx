import React, { use, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import Home from "./pages/Home";
import Listing from "./pages/Listing";
import PropertyList from "./pages/PropertyList";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import useAuthStore from "./store/authStore";
import CreateListing from "./pages/CreateListing";
import ProtectRoute from "./pages/ProtectRoute";
import Chat from "./pages/Chat";
import UpdateListing from "./pages/UpdateListing";

export default function App() {
  const fetchCurrentUser = useAuthStore((state) => state.fetchCurrentUser);
  useEffect(() => {
    fetchCurrentUser();
  }, []);
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
        <Route
          path="/chat"
          element={
            <ProtectRoute>
              <Chat />
            </ProtectRoute>
          }
        />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/create-listing"
          element={
            <ProtectRoute>
              <CreateListing />
            </ProtectRoute>
          }
        />
        <Route
          path="/update-listing/:id"
          element={
            <ProtectRoute>
              <UpdateListing />
            </ProtectRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
