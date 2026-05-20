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

export default function PropertyList() {
  const [openSlider, setOpenSlider] = useState(false);
  const [listingData, setListingData] = useState("");
  const { id } = useParams();
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
    return <div>Loading..</div>;
  }
  return (
    <div className="">
      <PageLayout>
        <div className="px-30 mt-30">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                {listingData?.title}
              </h2>
              <p className="flex text-gray-600 items-center gap-1 mb-5">
                <IoLocationOutline /> {listingData?.location?.address}
              </p>
            </div>
            <SaveListing userId={listingData?.userId} />
          </div>
          <div className="flex mb-5">
            <div className="flex-1 p-2 grow">
              <img
                src={listingData?.images[0]}
                alt="property image"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="w-[30%] flex flex-col p-2 gap-2">
              {listingData?.images.map((image, index) => (
                <img
                  key={`property_image_${index}`}
                  src={image}
                  alt="property image"
                  className="w-full object-cover flex-1 rounded-xl"
                />
              ))}
            </div>
          </div>
          <div className="flex justify-between">
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
                  <IoBedOutline />
                  <span>{listingData?.details.bedrooms} Bed Room</span>
                </div>
                <div className="flex gap-2 items-center">
                  <PiBathtub />
                  <span>{listingData?.details.bathrooms} Bath</span>
                </div>
                <div className="flex gap-2 items-center">
                  <BiArea />
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
            <AgentInfo />
          </div>
          <div className="my-7">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-700">{listingData?.description}</p>
          </div>
        </div>
      </PageLayout>
    </div>
  );
}
