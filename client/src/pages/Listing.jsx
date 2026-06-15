import React, { useEffect, useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import FilterForm from "../components/ui/listing/FilterForm";
import List from "../components/ui/listing/List";
import PropertyMap from "../components/ui/PropertyMap";
import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPaths";
import { useLocation, useNavigate } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Listing() {
  const [listings, setListings] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const filters = {
    search: queryParams.get("search") || "",
    city: queryParams.get("city") || "",
    type: queryParams.get("type") || "any",
    property: queryParams.get("property") || "any",
    status: queryParams.get("status") || "any",
    minPrice: queryParams.get("minPrice") || "",
    maxPrice: queryParams.get("maxPrice") || "",
    minBedrooms: queryParams.get("minBedrooms") || "any",
    minBathrooms: queryParams.get("minBathrooms") || "any",
    minSize: queryParams.get("minSize") || "",
    minParking: queryParams.get("minParking") || "",
    furnished: queryParams.get("furnished") || "any",
    petsAllowed: queryParams.get("petsAllowed") || "any",
    electricityIncluded: queryParams.get("electricityIncluded") || "any",
    waterIncluded: queryParams.get("waterIncluded") || "any",
    internetIncluded: queryParams.get("internetIncluded") || "any",
    gasIncluded: queryParams.get("gasIncluded") || "any",
    amenities: queryParams.get("amenities") || "any",
  };

  const fetchListing = async () => {
    try {
      const cleanedFilters = Object.fromEntries(
        Object.entries(filters).filter(
          ([_, value]) =>
            value !== "" &&
            value !== "any" &&
            value !== null &&
            value !== undefined,
        ),
      );
      const response = await axiosInstance.get(API_PATHS.POST.GETALL, {
        params: cleanedFilters,
      });
      setListings(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchListing();
  }, [location.search]);
  return (
    <div className="min-h-screen">
      <PageLayout>
        <div className="mb-10 flex md:flex-row flex-col gap-10 md:justify-between items-center lg:px-20 px-10">
          <div className="flex flex-col gap-2 md:text-start text-center">
            <h1 className="text-xl font-bold">Explore Property Listings</h1>
            <p className="text-sm text-gray-500">
              Discover your next home or investment from a curated selection of
              verified properties, all in one place.
            </p>
          </div>

          <Link to="/create-listing">
            <button className="bg-yellow-500 text-white flex items-center px-4 py-2 rounded-full text-sm font-semibold gap-2 cursor-pointer">
              Create Listing <IoMdAdd />
            </button>
          </Link>
        </div>
        <FilterForm currentFilter={filters} />
        <div className="mb-10">
          <List properties={listings} />
          {/* <PropertyMap properties={properties} /> */}
        </div>
      </PageLayout>
    </div>
  );
}
