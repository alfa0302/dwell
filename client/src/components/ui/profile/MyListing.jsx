import React, { useEffect, useState } from "react";
import axiosInstance from "../../../utils/axiosInstance";
import { API_PATHS } from "../../../utils/apiPaths";
import useAuthStore from "../../../store/authStore";
import LoadingDots from "../LoadingDots";
import PropertyListBox from "../listing/PropertyListBox";
export default function MyListing() {
  const [myListLoading, setMyListLoading] = useState(false);
  const [myList, setMyList] = useState([]);
  const { user } = useAuthStore();
  const fetchMyList = async () => {
    if (!user?._id) return;
    setMyListLoading(true);
    try {
      const list = await axiosInstance.get(
        API_PATHS.POST.GETBYUSERID(user._id),
      );
      setMyList(list.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setMyListLoading(false);
    }
  };
  useEffect(() => {
    fetchMyList();
  }, [user?._id]);
  if (myListLoading) return <LoadingDots />;
  return (
    <div className="w-full h-full flex justify-center items-center">
      {myList.length === 0 ? (
        <span className="text-gray-500">You don't have any posts to show.</span>
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {myList.map((item, index) => (
            <PropertyListBox key={`my-listing-${index}`} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
