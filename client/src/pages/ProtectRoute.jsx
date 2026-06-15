import React from "react";
import { Navigate } from "react-router-dom";
import useAuthStore from "../store/authStore";
import PageLoader from "../components/ui/PageLoader";

export default function ProtectRoute({ children }) {
  const { loading, user } = useAuthStore();
  if (loading) {
    return <PageLoader />;
  }
  if (!user) {
    return <Navigate to="/auth" replace />;
  }
  return children;
}
