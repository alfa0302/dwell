import React from "react";
import PageLayout from "../components/layout/PageLayout";
import FilterForm from "../components/ui/listing/FilterForm";
import List from "../components/ui/listing/List";
import PropertyMap from "../components/ui/PropertyMap";

const properties = [
  {
    id: 1,
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    ],
    title: "Luxury Marina Apartment",
    location: "Dubai Marina, Dubai",
    type: "rent",
    price: 8500,
    bedrooms: 2,
    bathrooms: 2,
    lat: 25.08,
    lng: 55.14,
  },
  {
    id: 2,
    images: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
    ],
    title: "Modern Downtown Condo",
    location: "Downtown Dubai, Dubai",
    type: "buy",
    price: 1450000,
    bedrooms: 3,
    bathrooms: 3,
    lat: 25.1972,
    lng: 55.2744,
  },
  {
    id: 3,
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    ],
    title: "Palm Jumeirah Beach House",
    location: "Palm Jumeirah, Dubai",
    type: "buy",
    price: 4200000,
    bedrooms: 5,
    bathrooms: 6,
    lat: 25.1124,
    lng: 55.139,
  },
  {
    id: 4,
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop",
    ],
    title: "Cozy Family Apartment",
    location: "Jumeirah Village Circle, Dubai",
    type: "rent",
    price: 6200,
    bedrooms: 1,
    bathrooms: 1,
    lat: 25.06,
    lng: 55.209,
  },
  {
    id: 5,
    images: [
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200&auto=format&fit=crop",
    ],
    title: "Elegant Villa with Pool",
    location: "Arabian Ranches, Dubai",
    type: "buy",
    price: 3500000,
    bedrooms: 4,
    bathrooms: 5,
    lat: 25.0478,
    lng: 55.2684,
  },
];

export default function Listing() {
  return (
    <div className="min-h-screen">
      <PageLayout>
        <FilterForm />
        <div className="px-30 grid grid-cols-2 gap-5 oveflow-auto">
          <List properties={properties} />
          <PropertyMap properties={properties} />
        </div>
      </PageLayout>
    </div>
  );
}
