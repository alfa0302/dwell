import React, { useEffect, useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import FilterForm from "../components/ui/listing/FilterForm";
import List from "../components/ui/listing/List";
import PropertyMap from "../components/ui/PropertyMap";
import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPaths";

export default function Listing() {
  const [listings, setListings] = useState([]);
  const fetchListing = async () => {
    try {
      const response = await axiosInstance.get(API_PATHS.POST.GETALL);
      setListings(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchListing();
  }, []);
  return (
    <div className="min-h-screen">
      <PageLayout>
        <FilterForm />
        <div className="px-30">
          <List properties={listings} />
          {/* <PropertyMap properties={properties} /> */}
        </div>
      </PageLayout>
    </div>
  );
}
