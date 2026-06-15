import React from "react";
import axiosInstance from "../../../utils/axiosInstance";
import { API_PATHS } from "../../../utils/apiPaths";
import { useNavigate } from "react-router-dom";

export default function DeleteModal({ setShowDeleteModal, id }) {
  const navigate = useNavigate();
  const deleteListing = async () => {
    try {
      await axiosInstance.delete(API_PATHS.POST.DELETE(id));
      navigate("/list");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="fixed inset-0 flex justify-center items-center backdrop-blur-xs">
      <div className="bg-white flex flex-col gap-5 justify-center items-center p-10 rounded-lg border-gray-300 border">
        <p>Are you sure you want to continue?</p>
        <div className="flex gap-3">
          <button
            className="bg-red-500 text-white px-3 py-1 rounded-lg cursor-pointer text-sm"
            onClick={deleteListing}
          >
            Delete
          </button>
          <button
            className="bg-gray-500 text-white px-3 py-1 rounded-lg cursor-pointer text-sm"
            onClick={() => setShowDeleteModal(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
