import React, { useEffect, useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import { FaSquare } from "react-icons/fa";
import {
  IoBedOutline,
  IoCarSport,
  IoLocationOutline,
  IoBulbOutline,
} from "react-icons/io5";
import { PiBathtub } from "react-icons/pi";
import { BiArea } from "react-icons/bi";
import { formatPrice } from "../utils/helper";
import PropertyImages from "../components/ui/propertyListing/PropertyImages";
import PropertyMap from "../components/ui/PropertyMap";
import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPaths";
import { useParams } from "react-router-dom";
import Details from "../components/ui/propertyListing/Details";
import SaveListing from "../components/ui/propertyListing/SaveListing";
import AgentInfo from "../components/ui/propertyListing/AgentInfo";
import UpdateListingLayout from "../components/ui/propertyListing/UpdateListingLayout";
import useAuthStore from "../store/authStore";
import Swiper from "../components/ui/Swiper";
import PageLoader from "../components/ui/PageLoader";

export default function PropertyList() {
  const [openSlider, setOpenSlider] = useState(false);
  const [listingData, setListingData] = useState("");
  const [showSwiper, setShowSwiper] = useState(false);
  const { id } = useParams();
  const { user } = useAuthStore();
  const fetchListing = async () => {
    try {
      const response = await axiosInstance.get(API_PATHS.POST.GETBYID(id));
      setListingData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchListing();
  }, [id]);

  if (!listingData) {
    return <PageLoader />;
  }
  return (
    <div className="">
      <PageLayout>
        <div className="px-30 my-30">
          <div className="flex justify-between items-center">
            <div className="">
              <h2 className="text-2xl font-semibold mb-2">
                {listingData?.title}
              </h2>
              <p className="flex text-gray-600 items-center gap-1 mb-5">
                <IoLocationOutline /> {listingData?.location?.address}
              </p>
            </div>
            {user._id !== listingData?.userId ? (
              <SaveListing postId={listingData?._id} />
            ) : (
              <UpdateListingLayout property={listingData ? listingData : ""} />
            )}
          </div>
          <div className="flex mb-5" onClick={() => setShowSwiper(true)}>
            <div className="flex-1 p-1">
              {listingData?.images?.[0] && (
                <img
                  src={listingData.images[0]}
                  alt="property image"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="w-[30%] flex flex-col p-2 gap-2">
              {listingData?.images?.[1] && (
                <img
                  src={listingData.images[1]}
                  alt="property image"
                  className="w-full flex-1 object-cover"
                />
              )}

              {listingData?.images?.[2] && (
                <img
                  src={listingData.images[2]}
                  alt="property image"
                  className="w-full flex-1 object-cover"
                />
              )}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="w-[70%]">
              <div className="flex items-center gap-2 mb-3">
                <FaSquare className="w-4 h-4 text-blue-500" />
                For {listingData?.purpose}
              </div>
              <div className="text-2xl font-semibold mb-3">
                AED {formatPrice(listingData?.price)}
              </div>
              <div className="flex items-center gap-10 mb-5 text-[16px]font-semibold ">
                <div className="flex gap-2 items-center">
                  <IoBedOutline className="text-yellow-500" />
                  <span>{listingData?.details.bedrooms} Bed Room</span>
                </div>
                <div className="flex gap-2 items-center">
                  <PiBathtub className="text-yellow-500" />
                  <span>{listingData?.details.bathrooms} Bath</span>
                </div>
                <div className="flex gap-2 items-center">
                  <BiArea className="text-yellow-500" />
                  <span>{listingData?.details.size} SQ FT</span>
                </div>
              </div>
              <div className="my-7">
                <h3 className="text-lg font-semibold mb-5">Details</h3>
                <Details
                  details={listingData?.details}
                  utilities={listingData?.utilities}
                />
              </div>
            </div>
            {user._id !== listingData?.userId && (
              <AgentInfo
                userId={listingData?.userId}
                contact={listingData?.contact}
              />
            )}
          </div>
          <div className="my-7">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-700">{listingData?.description}</p>
          </div>
          <PropertyMap properties={listingData} />
        </div>
      </PageLayout>
      {showSwiper && (
        <Swiper images={listingData.images} setShowSwiper={setShowSwiper} />
      )}
    </div>
  );
}
