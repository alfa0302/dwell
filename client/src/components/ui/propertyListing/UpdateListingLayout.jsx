import React, { useState } from "react";
import { MdModeEdit, MdDelete } from "react-icons/md";
import DeleteModal from "./DeleteModal";
import { useNavigate } from "react-router-dom";

export default function UpdateListingLayout({ property }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex gap-3">
        <button
          className="flex items-center gap-2 bg-gray-300 text-gray-700 cursor-pointer px-4 py-2 rounded-lg text-sm"
          onClick={() => {
            navigate(`/update-listing/${property?._id}`);
          }}
        >
          <MdModeEdit />
          <span>Edit</span>
        </button>
        <button
          className="flex items-center gap-2 bg-gray-300 text-gray-700 cursor-pointer px-4 py-2 rounded-lg text-sm"
          onClick={() => setShowDeleteModal(true)}
        >
          <MdDelete />
          <span>Delete</span>
        </button>
      </div>
      {showDeleteModal && (
        <DeleteModal
          setShowDeleteModal={setShowDeleteModal}
          id={property?._id}
        />
      )}
    </div>
  );
}
