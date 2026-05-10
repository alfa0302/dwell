import React, { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import { IoLocationOutline, IoRestaurantOutline } from "react-icons/io5";
import { VscTools } from "react-icons/vsc";
import {
  MdOutlinePets,
  MdOutlineSquareFoot,
  MdSchool,
  MdDirectionsBus,
} from "react-icons/md";
import { FaMoneyCheckAlt, FaBed, FaBath } from "react-icons/fa";
import { formatPrice } from "../utils/helper";
import PropertyImages from "../components/ui/propertyListing/PropertyImages";
import PropertyMap from "../components/ui/PropertyMap";

const property = {
  id: 1,

  user: {
    id: "user_98765",

    name: "Ahmed Hassan",

    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200",

    role: "Premium Agent",

    phone: "+971 50 123 4567",

    whatsapp: "+971 50 123 4567",

    joinedDate: "January 2023",
  },

  title: "Luxury Marina Apartment",

  location: "Dubai Marina, Dubai",

  type: "rent",

  price: 8500,

  images: [
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200",

    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200",

    "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200",

    "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200",
  ],

  description:
    "A stunning luxury apartment located in the heart of Dubai Marina with panoramic water views and modern finishes throughout. A stunning luxury apartment located in the heart of Dubai Marina with panoramic water views and modern finishes throughout.",

  details: {
    bedrooms: 2,

    bathrooms: 2,

    roomSize: "1,200 sqft",

    furnished: true,

    propertyFees: 1500,
  },

  policies: {
    utilities: "Renter is responsible for DEWA and cooling charges.",

    petPolicy: "Allowed",

    propertyFees: "Must have 3X rent ready",
  },

  coordinates: {
    lat: 25.08,

    lng: 55.14,
  },

  nearby: [
    { name: "Marina British Nursery", type: "school", distance: "150m" },

    { name: "Marina Mall Bus Station", type: "busstop", distance: "100m" },

    { name: "The Cheesecake Factory", type: "restaurant", distance: "200m" },
  ],
};

export default function PropertyList() {
  const [openSlider, setOpenSlider] = useState(false);

  return (
    <div className="">
      <PageLayout>
        <div className="px-30 grid grid-cols-2 gap-10">
          <div className="mt-20 pb-20">
            <PropertyImages
              images={property?.images}
              onClick={() => setOpenSlider(true)}
            />
            <div className="">
              <div className="flex justify-between items-stretch my-10">
                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl font-semibold">{property?.title}</h3>
                  <p className="flex gap-2 items-center text-gray-600">
                    <IoLocationOutline />
                    {property?.location}
                  </p>
                  <div className="mt-3">
                    <span className="bg-yellow-200 text-gray-600 py-2 px-4 text-lg rounded-lg font-bold">
                      AED {formatPrice(property?.price)}
                      {property?.type === "rent" ? "/month" : ""}
                    </span>
                  </div>
                </div>
                <div className="w-32 h-32 bg-yellow-200 flex flex-col items-center justify-center gap-1 rounded-lg">
                  <img
                    src={property?.user?.avatar}
                    alt="profile pic"
                    className="h-16 w-16 object-cover object-top rounded-full border-2 border-white"
                  />
                  <h4 className="text-sm font-semibold text-center px-1 text-gray-600">
                    {property?.user?.name}
                  </h4>
                </div>
              </div>
              <p className="text-gray-800 leading-relaxed">
                {property?.description}
              </p>
            </div>
          </div>
          <div className="bg-orange-50 pt-20 px-8 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-md text-gray-800">General</h3>
              <div className="flex flex-col gap-5 bg-white p-4 rounded-xl shadow-sm">
                <div className="flex items-center gap-3">
                  <VscTools className="text-xl text-gray-600" />
                  <div>
                    <h4 className="font-semibold text-sm">Utilities</h4>
                    <span className="text-sm text-gray-600">
                      {property?.policies?.utilities}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MdOutlinePets className="text-xl text-gray-600" />
                  <div>
                    <h4 className="font-semibold text-sm">Pet Policy</h4>
                    <span className="text-sm text-gray-600">
                      {property?.policies?.petPolicy}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaMoneyCheckAlt className="text-xl text-gray-600" />
                  <div>
                    <h4 className="font-semibold text-sm">Property Fees</h4>
                    <span className="text-sm text-gray-600">
                      {property?.policies?.propertyFees}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-md text-gray-800">Room Sizes</h3>
              <div className="flex justify-between bg-white p-4 rounded-xl shadow-sm">
                <div className="flex items-center gap-2">
                  <MdOutlineSquareFoot className="text-xl text-gray-700" />
                  <span className="text-sm font-medium">
                    {property?.details?.roomSize}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FaBed className="text-xl text-gray-700" />
                  <span className="text-sm font-medium">
                    {property?.details?.bedrooms} Beds
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FaBath className="text-xl text-gray-700" />
                  <span className="text-sm font-medium">
                    {property?.details?.bathrooms} Baths
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-md text-gray-800">Nearby Places</h3>
              <div className="flex flex-col gap-5 bg-white p-4 rounded-xl shadow-sm">
                {property?.nearby?.map((place, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      {place.type === "school" && (
                        <MdSchool className="text-2xl text-gray-600" />
                      )}
                      {place.type === "busstop" && (
                        <MdDirectionsBus className="text-2xl text-gray-600" />
                      )}
                      {place.type === "restaurant" && (
                        <IoRestaurantOutline className="text-2xl text-gray-600" />
                      )}
                      <div>
                        <h4 className="text-sm">{place.name}</h4>
                        {/* <span className="text-xs text-gray-500 uppercase">
                          {place.type}
                        </span> */}
                      </div>
                    </div>
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs font-bold">
                      {place.distance}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <PropertyMap properties={[property]} height="150px" />
          </div>
        </div>
      </PageLayout>
    </div>
  );
}
