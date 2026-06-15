import React, { useEffect, useState } from "react";
import axiosInstance from "../../../utils/axiosInstance";
import { API_PATHS } from "../../../utils/apiPaths";
import useAuthStore from "../../../store/authStore";
import LoadingDots from "../LoadingDots";
import PropertyListBox from "../listing/PropertyListBox";

export default function MySaved() {
  const [mySavedLoading, setMySavedLoading] = useState(false);
  const [mySavedList, setMySavedList] = useState([]);
  const { user } = useAuthStore();

  const fetchMySavedList = async () => {
    if (!user?._id) return;

    setMySavedLoading(true);
    try {
      const response = await axiosInstance.get(API_PATHS.SAVE.GET);
      setMySavedList(response.data.data);
    } catch (error) {
      console.error("Error fetching saved properties:", error);
    } finally {
      setMySavedLoading(false);
    }
  };
  const deleteSaved = async (id) => {
    try {
      await axiosInstance.delete(API_PATHS.SAVE.DELETE(id));
      fetchMySavedList();
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchMySavedList();
  }, [user?._id]);
  if (mySavedLoading) return <LoadingDots />;

  return (
    <div className="w-full h-full flex justify-center items-center">
      {mySavedList?.length === 0 ? (
        <span className="text-gray-500">
          You don't have any saved posts to show.
        </span>
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {mySavedList?.map((item, index) => (
            <PropertyListBox
              key={`my-saved-${index}`}
              item={item.postId}
              showDelete={true}
              deleteSaved={() => deleteSaved(item._id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
